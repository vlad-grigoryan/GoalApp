import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {initialGoal} from '../../initialData';
import {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
} from '../../redux/actions/goal.actions';
import {connect} from 'react-redux';
import {GoalBlockInterface} from '../../interfaces';
import GoalTextInput from '../../components/GoalTextInput';
import GoalDateModal from '../../components/GoalDateModal';
import BackgroundList from '../../components/BackgroundList';
import NameTextInput from '../../components/NameTextInput';
import GoalModalHeader from '../../components/GoalModalHeader';
import DeleteGoalBlock from '../../components/DeleteGoalBlock';

interface Props {
  goal: {
    selectedGoal: GoalBlockInterface;
    goals: GoalBlockInterface[];
    selectedIndex: number;
  };
  editableGoal: boolean;
  editGoal: (goalBlock: GoalBlockInterface) => void;
  addGoal: (goalBlock: GoalBlockInterface) => void;
  removeGoal: (selectedGoalIndex: number) => void;
  setModalVisibility: (visibility: boolean) => void;
  changeGoalBackground: (bgIndex: number, selectedIndex: number) => void;
}

const CreateGoalBlock = (props: Props) => {
  const selectedGoalData = props.editableGoal
    ? props.goal.selectedGoal
    : initialGoal;

  const [newGoal, setNewGoal] = useState<GoalBlockInterface>(selectedGoalData);
  const [deadlineDate, setDeadlineDate] = useState(selectedGoalData.deadline);
  const [goalValue, setGoalValue] = useState<string>(
    selectedGoalData.goal.toString(),
  );
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>(selectedGoalData.title);
  useEffect(() => {
    if (props.goal.selectedGoal && props.editableGoal) {
      setNewGoal(props.goal.selectedGoal);
    }
    if (props.goal.selectedIndex) {
      setSelectedIndex(props.goal.selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.goal]);

  const handleSubmit = () => {
    const selectedGoal = {
      ...newGoal,
      bgIndex: bgIndex,
      title,
      goal: Number(goalValue),
      deadline: deadlineDate,
    };
    if (props.editableGoal) {
      props.editGoal(selectedGoal);
    } else {
      selectedGoal.id = props.goal.goals.length;
      props.addGoal(selectedGoal);
    }
    props.setModalVisibility(false);
  };

  const handleRemoveItem = () => {
    props.removeGoal(selectedIndex);
    props.setModalVisibility(false);
  };

  const bgChange = (index: number) => {
    setBgIndex(index);
    if (props.editableGoal) {
      props.changeGoalBackground(index, selectedIndex);
    }
  };
  return (
    <View style={styles.modalBody}>
      <ScrollView>
        <GoalModalHeader handleSubmit={handleSubmit} />
        <NameTextInput inputChange={setTitle} inputValue={title} />
        <BackgroundList bgChange={bgChange} bgIndex={bgIndex} />
        <GoalDateModal
          handleConfirm={setDeadlineDate}
          deadline={deadlineDate}
        />
        <GoalTextInput setGoalValue={setGoalValue} goalValue={goalValue} />
      </ScrollView>
      <DeleteGoalBlock handleRemoveItem={handleRemoveItem} />
    </View>
  );
};

const mapStateToProps = (state: any) => ({goal: state.goal});
const mapActionsToProps = {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
};

export default connect(mapStateToProps, mapActionsToProps)(CreateGoalBlock);
