import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
  },
  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: '400',
  },
  plusSign: {
    borderRadius: 100,
    height: 20,
    width: 20,
    backgroundColor: '#000000',
    position: 'relative',
  },
  crossUp: {
    backgroundColor: 'white',
    height: 2,
    top: 8,
    left: 3.6,
    width: 13,
  },
  crossFlat: {
    backgroundColor: 'white',
    height: 13,
    width: 2,
    position: 'absolute',
    left: 9,
    top: 3,
  },
});

export default styles;
