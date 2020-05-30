import {StyleSheet} from 'react-native';
import {deviceHeight, goalItemWrapper} from '../../utils';

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: 'white',
    position: 'absolute',
    height: goalItemWrapper,
    bottom: 0,
    left: 0,
    right: 0,
    top: deviceHeight * 0.1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    flex: 1,
  },
  additionalBlock: {
    height: 250,
  },
});

export default styles;
