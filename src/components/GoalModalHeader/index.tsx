import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Mask from '../Mask';

interface Props {
  handleSubmit: () => void;
}
const GoalModalHeader = ({handleSubmit}: Props) => (
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
);

export default GoalModalHeader;
