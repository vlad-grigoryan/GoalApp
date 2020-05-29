import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  inputChange: (inputValue: string) => void;
  inputValue: string;
}
const NameTextInput = ({inputChange, inputValue}: Props) => (
  <View style={styles.formSection}>
    <TextInput
      onChangeText={(text) => inputChange(text)}
      value={inputValue}
      style={styles.formFieldInput}
    />
  </View>
);

export default NameTextInput;
