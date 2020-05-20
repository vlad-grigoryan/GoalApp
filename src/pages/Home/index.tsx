import React, {useEffect, useRef, useState} from 'react';
import {View, ScrollView, Text, Modal, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import {increaseGoal, setSelectedGoal} from '../../redux/actions/goal.actions';
import Header from '../../components/Header';
import GoalItem from './../../components/GoaItem';
import GoalForm from '../../components/GoalForm';
import AddingGoalButton from '../../components/AddingGoalButton';
import styles from './styles';

import {deviceWidth, goalItemWidth, centralizedWidth} from '../../utils';

const Home = (props: any) => {
  const scrollRef: any = useRef(null);
  const [goals, setGoals] = useState(null);
  const [editableGoal, setEditableGoal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (props.goal.goals) {
      setGoals(props.goal.goals);
    }
  }, [props.goal]);

  const setModalVisibility = (shouldShowModal: boolean) => {
    setShowModal(shouldShowModal);
  };

  const handlePlus = () => {
    props.increaseGoal(currentIndex);
    scrollRef &&
      scrollRef.current.scrollTo({
        x:
          currentIndex * goalItemWidth +
          centralizedWidth -
          (deviceWidth - goalItemWidth) / 2,
      });
  };

  const openEditFormModal = (goal: any, index: number) => {
    setShowModal(true);
    setEditableGoal(true);
    scrollRef &&
      scrollRef.current.scrollTo({
        x:
          index * goalItemWidth +
          centralizedWidth -
          (deviceWidth - goalItemWidth) / 2,
      });
    props.setSelectedGoal(goal, index);
  };

  return (
    <View style={styles.container}>
      {!showModal && (
        <Header
          addGoal={() => {
            setModalVisibility(true);
            setEditableGoal(false);
          }}
        />
      )}
      {!showModal && <Text style={styles.title}>Financial Goals</Text>}
      <View>
        <ScrollView
          scrollEventThrottle={16}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
          onScroll={({
            nativeEvent: {
              contentOffset: {x},
            },
          }) => {
            const newCurrentIndexGoal = Math.floor(
              (x + deviceWidth / 2 - centralizedWidth) / goalItemWidth,
            );
            if (newCurrentIndexGoal !== currentIndex) {
              setCurrentIndex(newCurrentIndexGoal);
            }
          }}
          ref={scrollRef}>
          <View style={styles.goalItems}>
            {goals &&
              goals.map((goal, index) => (
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => openEditFormModal(goal, index)}>
                  <GoalItem {...goal} key={index} />
                </TouchableHighlight>
              ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setModalVisibility(false)}>
          <View style={styles.modalBody}>
            <ScrollView>
              <GoalForm
                editableGoal={editableGoal}
                setModalVisibility={setModalVisibility}
              />
            </ScrollView>
          </View>
        </Modal>
        <AddingGoalButton handlePlus={handlePlus} />
      </View>
    </View>
  );
  // }
};

const mapStateToProps = (state: any) => {
  return {
    goal: state.goal,
  };
};
const mapActionsToProps = {
  increaseGoal,
  setSelectedGoal,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
