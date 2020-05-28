import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import Mask from './../Mask';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  setGoalValue: (goalValue: string) => void;
  goalValue: string;
}
const GoalTextInput = ({setGoalValue, goalValue}: Props) => {
  const goalTextInputRef = useRef<TextInput>();
  const handleGoalPress = () => {
    if (goalTextInputRef && goalTextInputRef.current) {
      goalTextInputRef.current.focus();
    }
  };
  return (
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
          <MaterialIcon style={styles.formFieldChevron} name="chevron-right" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoalTextInput;
