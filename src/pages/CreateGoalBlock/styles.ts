import {StyleSheet} from 'react-native';
import {goalItemWrapper} from '../../utils';

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: 'white',
    height: goalItemWrapper,
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

export default styles;
