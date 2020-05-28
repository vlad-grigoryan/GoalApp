import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mask from '../../components/Mask';
import styles from './styles';
import {goalsData} from '../../initialData';
import {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
} from '../../redux/actions/goal.actions';
import {connect} from 'react-redux';
import {GoalBlock} from '../../interfaces';
import GoalTextInput from '../../components/GoalTextInput';
import GoalDateModal from '../../components/GoalDateModal';
import BackgroundList from '../../components/BackgroundList';

interface Props {
  goal: {
    selectedGoal: GoalBlock;
    selectedIndex: number;
  };
  editableGoal: boolean;
  editGoal: (goalBlock: GoalBlock) => void;
  addGoal: (goalBlock: GoalBlock) => void;
  removeGoal: (selectedGoalIndex: number) => void;
  setModalVisibility: (visibility: boolean) => void;
  changeGoalBackground: (bgIndex: number, selectedIndex: number) => void;
}

const CreateGoalBlock = (props: Props) => {
  const [newGoal, setNewGoal] = useState<GoalBlock>(goalsData[0]);
  const [deadlineDate, setDeadlineDate] = useState(newGoal.deadline);
  const [goalValue, setGoalValue] = useState<string>(
    goalsData[0].goal.toString(),
  );
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (props.goal.selectedGoal && props.editableGoal) {
      setNewGoal(props.goal.selectedGoal);
    }
    if (props.goal.selectedIndex) {
      setSelectedIndex(props.goal.selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.goal]);

  const handleFieldChange = (fieldName: string, value: number) => {
    setNewGoal({
      ...newGoal,
      [fieldName]: value,
    });
  };

  const handleSubmit = () => {
    const selectedGoal = {
      ...newGoal,
      bgIndex,
    };
    if (props.editableGoal) {
      props.editGoal(selectedGoal);
    } else {
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
    <>
      <View style={styles.formTopSection}>
        <View style={styles.formField}>
          <Text style={styles.formTitle}>Financial</Text>
          <TouchableOpacity onPress={handleSubmit}>
            <Mask style={styles.formSubmitMask}>
              <Text style={styles.formSubmit}>Done</Text>
            </Mask>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formSection}>
        <TextInput
          onChangeText={(text) => handleFieldChange('title', Number(text))}
          value={newGoal.title}
          style={styles.formFieldInput}
        />
      </View>
      <BackgroundList bgChange={bgChange} bgIndex={bgIndex} />
      <GoalDateModal handleConfirm={setDeadlineDate} deadline={deadlineDate} />
      <GoalTextInput setGoalValue={setGoalValue} goalValue={goalValue} />
      <TouchableOpacity style={styles.bottomSection} onPress={handleRemoveItem}>
        <Icon name="trash-o" style={styles.deleteIcon} />
      </TouchableOpacity>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    goal: state.goal,
  };
};
const mapActionsToProps = {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
};

export default connect(mapStateToProps, mapActionsToProps)(CreateGoalBlock);
