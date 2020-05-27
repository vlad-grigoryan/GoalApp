import React, {useEffect, useRef, useState} from 'react';
import {View, ScrollView, Text, Modal} from 'react-native';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import CreateGoalBlock from '../CreateGoalBlock';
import GoalBlockList from '../../components/GoalBlockList/GoalBlockList';
import AddingGoalButton from '../../components/AddingGoalButton';
import {increaseGoal, setSelectedGoal} from '../../redux/actions/goal.actions';
import {deviceWidth, goalItemWidth, centralizedWidth} from '../../utils';
import {GoalBlock} from '../../interfaces';
import styles from './styles';

interface Props {
  goal: {
    goals: GoalBlock[];
  };
  increaseGoal: (selectedIndex: number) => void;
  setSelectedGoal: (selectedGoal: GoalBlock, selectedIndex: number) => void;
}

const Home: React.FC<Props> = (props: Props) => {
  const scrollRef = useRef<any>(null);
  const [goals, setGoals] = useState<GoalBlock[] | null>(null);
  const [editableGoal, setEditableGoal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
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
      scrollRef.current &&
      scrollRef.current.scrollTo({
        x:
          currentIndex * goalItemWidth +
          centralizedWidth -
          (deviceWidth - goalItemWidth) / 2,
      });
  };

  const openEditFormModal = (goal: GoalBlock, index: number) => {
    setShowModal(true);
    setEditableGoal(true);
    scrollRef &&
      scrollRef.current &&
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
      {goals && (
        <GoalBlockList
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          openEditFormModal={openEditFormModal}
          scrollRef={scrollRef}
          goalBlocks={goals}
        />
      )}
      <View style={styles.bottomContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setModalVisibility(false)}>
          <View style={styles.modalBody}>
            <ScrollView>
              <CreateGoalBlock
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

const mapStateToProps = (state: {goal: {goals: GoalBlock[]}}) => {
  return {
    goal: state.goal,
  };
};
const mapActionsToProps = {
  increaseGoal,
  setSelectedGoal,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
