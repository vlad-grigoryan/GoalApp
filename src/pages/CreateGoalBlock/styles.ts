import {StyleSheet} from 'react-native';
import {deviceHeight, goalItemWrapper} from '../../utils';

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: 'white',
    height: goalItemWrapper,
    bottom: 0,
    left: 0,
    right: 0,
    top: deviceHeight * 0.09,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

export default styles;
