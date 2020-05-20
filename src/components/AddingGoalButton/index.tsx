import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import Mask from './../Mask';
import styles from './styles';

const AddingGoalButton = ({handlePlus}) => (
  <TouchableOpacity onPress={handlePlus}>
    <Mask style={styles.mask}>
      <View style={styles.addButton}>
        <Icon name="plus" style={styles.addIcon} />
      </View>
    </Mask>
  </TouchableOpacity>
);

export default AddingGoalButton;
