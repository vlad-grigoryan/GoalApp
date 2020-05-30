import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import CreateGoalBlock from '../CreateGoalBlock';
import GoalBlockList from '../../components/GoalBlockList/GoalBlockList';
import AddingGoalButton from '../../components/AddingGoalButton';
import {increaseGoal, setSelectedGoal} from '../../redux/actions/goal.actions';
import {deviceWidth, goalItemWidth, centralizedWidth} from '../../utils';
import {GoalBlockInterface} from '../../interfaces';
import styles from './styles';

interface Props {
  goal: {
    goals: GoalBlockInterface[];
  };
  increaseGoal: (selectedIndex: number) => void;
  setSelectedGoal: (
    selectedGoal: GoalBlockInterface,
    selectedIndex: number,
  ) => void;
}

const Home: React.FC<Props> = (props: Props) => {
  const scrollRef = useRef<any>(null);
  const [goals, setGoals] = useState<GoalBlockInterface[] | null>(null);
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

  const openEditFormModal = (goal: GoalBlockInterface, index: number) => {
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
          showModal={showModal}
        />
      )}
      <View style={styles.bottomContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setModalVisibility(false)}>
          <CreateGoalBlock
            editableGoal={editableGoal}
            setModalVisibility={setModalVisibility}
          />
        </Modal>
        {goals && goals.length ? (
          <AddingGoalButton handlePlus={handlePlus} />
        ) : null}
      </View>
    </View>
  );
  // }
};

const mapStateToProps = (state: {goal: {goals: GoalBlockInterface[]}}) => {
  return {
    goal: state.goal,
  };
};
const mapActionsToProps = {
  increaseGoal,
  setSelectedGoal,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
