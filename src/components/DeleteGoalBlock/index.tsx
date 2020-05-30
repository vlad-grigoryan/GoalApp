import {Keyboard, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import styles from './styles';

interface Props {
  handleRemoveItem: () => void;
}
const DeleteGoalBlock = ({handleRemoveItem}: Props) => {
  let keyboardDidShowListener: any, keyboardDidHideListener: any;
  const [btnLocation, setBtnLocation] = useState<number>(0);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
      setBtnLocation(e.endCoordinates.height);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
      setBtnLocation(0);
    });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <>
      <View style={{...styles.bottomSection, bottom: btnLocation}}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleRemoveItem}>
          <Icon name="trash-o" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DeleteGoalBlock;
