import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from './../../components/Background';
import Mask from './../Mask';
import styles from './styles';
import {backgrounds} from '../../initialData';
import {
  addGoal,
  editGoal,
  changeGoalBackground,
  removeGoal,
} from '../../redux/actions/goal.actions';
import {connect} from 'react-redux';

const initialNewGoal = {
  title: 'New goal',
  deadline: 'tomorrow',
  goal: '25000',
};

const GoalForm = (props: any) => {
  let keyboardDidShowListener;
  const [newGoal, setNewGoal] = useState<{
    title: string;
    deadline: string;
    goal: string;
  }>(initialNewGoal);
  const [currentField, setCurrentField] = useState<string | null>(null);
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {});
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);
  useEffect(() => {
    if (props.goal.selectedGoal && props.editableGoal) {
      setNewGoal(props.goal.selectedGoal);
      setCurrentField(props.goal.selectedGoal.current);
    }
    if (props.goal.selectedIndex) {
      setSelectedIndex(props.goal.selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.goal]);

  const handleFieldChange = (fieldName, value) => {
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
          onChangeText={(text) => handleFieldChange('title', text)}
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
        {currentField === 'deadline' ? (
          <TextInput
            onChangeText={(text) => handleFieldChange('deadline', text)}
            value={newGoal.deadline}
            ref={(ref) => ref && ref.focus()}
            onBlur={() => setCurrentField(null)}
            style={styles.formFieldInput}
          />
        ) : (
          <TouchableOpacity
            style={styles.formField}
            onPress={() => setCurrentField('deadline')}>
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
        )}
      </View>
      <View style={styles.formSection}>
        {currentField === 'goal' ? (
          <TextInput
            onChangeText={(text) => handleFieldChange('goal', text)}
            value={newGoal.goal}
            ref={(ref) => ref && ref.focus()}
            onBlur={() => setCurrentField(null)}
            style={styles.formFieldInput}
          />
        ) : (
          <TouchableOpacity
            style={styles.formField}
            onPress={() => setCurrentField('goal')}>
            <View style={styles.formFieldGroup}>
              <Mask style={styles.formFieldIconMask}>
                <MaterialIcon
                  style={styles.formFieldIcon}
                  name="flag-variant-outline"
                />
              </Mask>
              <Text style={styles.formFieldTitle}>Goal</Text>
            </View>
            <View style={styles.formFieldGroup}>
              <Text style={styles.formFieldValue}>${newGoal.goal}</Text>
              <MaterialIcon
                style={styles.formFieldChevron}
                name="chevron-right"
              />
            </View>
          </TouchableOpacity>
        )}
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

export default connect(mapStateToProps, mapActionsToProps)(GoalForm);
