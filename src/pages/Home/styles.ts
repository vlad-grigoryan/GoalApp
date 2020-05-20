import {StyleSheet} from 'react-native';
import {
  deviceHeight,
  goalItemHeight,
  deviceWidth,
  goalItemWrapper,
  centralizedWidth,
} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.2,
    color: '#121212',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 48,
  },
  scrollContainer: {
    width: deviceWidth,
    height: goalItemHeight,
    marginHorizontal: -10,
    paddingVertical: 10,
  },
  goalItems: {
    paddingLeft: centralizedWidth,
    paddingRight: centralizedWidth,
    flexDirection: 'row',
  },
  modalBody: {
    backgroundColor: 'white',
    height: goalItemWrapper,
    bottom: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  goalWrapper: {
    color: 'white',
  },
});

export default styles;
