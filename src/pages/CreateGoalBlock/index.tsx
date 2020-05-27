import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '../../components/Background';
import Mask from '../../components/Mask';
import styles from './styles';
import {backgrounds, goalsData} from '../../initialData';
import {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
} from '../../redux/actions/goal.actions';
import {connect} from 'react-redux';
import {GoalBlock} from '../../interfaces';

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
  const goalTextInputRef = useRef<TextInput>(null);
  const [newGoal, setNewGoal] = useState<GoalBlock>(goalsData[0]);
  const [goalValue, setGoalValue] = useState<string>(
    goalsData[0].goal.toString(),
  );
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
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
      backgroundIndex,
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

  function handleBackgroundChange(bgIndex: number) {
    setBackgroundIndex(bgIndex);
    if (props.editableGoal) {
      props.changeGoalBackground(bgIndex, selectedIndex);
    }
  }
  const handleGoalPress = () => {
    if (goalTextInputRef && goalTextInputRef.current) {
      goalTextInputRef.current.focus();
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
      <View style={styles.formSection}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.backgroundsSelector}>
          <View style={styles.backgroundItems}>
            {backgrounds.map((background, index) => (
              <TouchableOpacity
                key={index}
                style={styles.backgroundItem}
                onPress={() => {
                  handleBackgroundChange(index);
                }}>
                <View key={index} style={styles.backgroundItemCircle}>
                  <Background {...background} />
                </View>
                {index === backgroundIndex && (
                  <MaterialIcon
                    style={styles.backgroundItemIcon}
                    name="check-circle"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.formSection}>
        <TouchableOpacity style={styles.formField}>
          <View style={styles.formFieldGroup}>
            <Mask style={styles.formFieldIconMask}>
              <Ionicon style={styles.formFieldIcon} name="ios-timer" />
            </Mask>
            <Text style={styles.formFieldTitle}>Until</Text>
          </View>
          <View style={styles.formFieldGroup}>
            <Text style={styles.formFieldValue}>{newGoal.deadline}</Text>
            <MaterialIcon
              style={styles.formFieldChevron}
              name="chevron-right"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.formSection}>
        <TouchableOpacity style={styles.formField} onPress={handleGoalPress}>
          <View style={styles.formFieldGroup}>
            <Mask style={styles.formFieldIconMask}>
              <MaterialIcon
                style={styles.formFieldIcon}
                name="flag-variant-outline"
              />
            </Mask>
            <Text style={styles.formFieldTitle}>Goal</Text>
          </View>
          <View style={styles.formFieldSecondRow}>
            <TextInput
              style={styles.formFieldValue}
              keyboardType="decimal-pad"
              ref={goalTextInputRef}
              onChangeText={setGoalValue}
              value={goalValue}
            />
            <MaterialIcon
              style={styles.formFieldChevron}
              name="chevron-right"
            />
          </View>
        </TouchableOpacity>
      </View>
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
