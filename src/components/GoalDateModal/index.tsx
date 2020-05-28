import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Mask from './../Mask';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate} from '../../utils';

interface Props {
  handleConfirm: (goalValue: Date) => void;
  deadline: Date;
}
const GoalDateModal = ({handleConfirm, deadline}: Props) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.formSection}>
      <TouchableOpacity
        style={styles.formField}
        onPress={() => setShowPicker(true)}>
        <View style={styles.formFieldGroup}>
          <Mask style={styles.formFieldIconMask}>
            <Ionicon style={styles.formFieldIcon} name="ios-timer" />
          </Mask>
          <Text style={styles.formFieldTitle}>Until</Text>
        </View>
        <View style={styles.formFieldGroup}>
          <Text style={styles.formFieldValue}>{formatDate(deadline)}</Text>
          <MaterialIcon style={styles.formFieldChevron} name="chevron-right" />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        date={deadline}
        onConfirm={(date) => {
          setShowPicker(false);
          handleConfirm(date);
        }}
        onCancel={() => setShowPicker(false)}
      />
    </View>
  );
};

export default GoalDateModal;
