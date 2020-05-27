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
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formFieldGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formFieldValue: {
    color: '#A6A6AB',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  formFieldChevron: {
    color: '#A6A6AB',
    fontSize: 22,
    lineHeight: 22,
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
  formTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  formFieldInput: {
    fontSize: 17,
    lineHeight: 22,
    padding: 0,
    letterSpacing: -0.4,
    color: '#121212',
  },
  formSubmit: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  formSubmitMask: {
    width: 50,
    height: 22,
  },
  bottomSection: {
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  deleteIcon: {
    fontSize: 20,
    color: '#5C5C5E',
  },
});

export default styles;
