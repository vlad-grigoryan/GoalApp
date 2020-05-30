import {StyleSheet} from 'react-native';
import {goalItemWidth} from '../../utils';

const styles = StyleSheet.create({
  itemWrapper: {
    width: goalItemWidth,
    height: '100%',
    paddingLeft: 10,
  },
  item: {
    height: '100%',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    borderRadius: 32,
    overflow: 'hidden',
    padding: 15,
  },
  itemBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  deadline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineIcon: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  deadlineText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 18,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircleText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  progressFinances: {
    paddingHorizontal: 15,
  },
  progressFinancesCurrent: {
    color: 'white',
    fontSize: 13,
    lineHeight: 18,
  },
  progressFinancesGoal: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 13,
    lineHeight: 18,
  },
});

export default styles;
