import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
      default: {
        // other platforms, web for example
        fontFamily: 'Roboto',
      },
    }),
  },
});
export default Styles;
