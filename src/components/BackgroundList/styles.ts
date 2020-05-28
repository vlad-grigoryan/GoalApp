import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formSection: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    minHeight: 70,
    justifyContent: 'center',
    padding: 16,
  },
  backgroundsSelector: {
    paddingVertical: 12,
    marginHorizontal: -16,
  },
  backgroundItems: {
    flexDirection: 'row',
    paddingLeft: 16,
  },
  backgroundItem: {
    width: 62,
    height: 62,
    marginRight: 16,
  },
  backgroundItemCircle: {
    width: 62,
    height: 62,
    borderRadius: 32,
    overflow: 'hidden',
  },
  backgroundItemIcon: {
    fontSize: 20,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
export default styles;
