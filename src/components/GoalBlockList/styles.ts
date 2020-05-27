import {StyleSheet} from 'react-native';
import {centralizedWidth, deviceWidth, goalItemHeight} from '../../utils';

const styles = StyleSheet.create({
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
});
export default styles;
