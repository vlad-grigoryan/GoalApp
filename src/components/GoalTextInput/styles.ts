import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formSection: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    minHeight: 70,
    justifyContent: 'center',
    padding: 16,
  },
  formFieldGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formFieldIconMask: {
    minWidth: 20,
    height: 20,
    marginRight: 12,
  },
  formFieldIcon: {
    fontSize: 20,
    textAlign: 'center',
  },
  formFieldTitle: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    fontWeight: 'bold',
  },
  formFieldSecondRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formFieldValue: {
    color: '#A6A6AB',
    width: 120,
    textAlign: 'right',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  formFieldChevron: {
    color: '#A6A6AB',
    fontSize: 22,
    lineHeight: 22,
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
