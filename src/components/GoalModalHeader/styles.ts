import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formTopSection: {
    paddingTop: 28,
    paddingBottom: 36,
    paddingHorizontal: 16,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  formSubmitMask: {
    width: 50,
    height: 22,
  },
  formSubmit: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
});
export default styles;
