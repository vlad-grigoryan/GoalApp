import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';

interface Props {
  addGoal: () => void;
}
const Header = ({addGoal}: Props) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerGrid}>
          <Text style={styles.title}>Goal App</Text>
          <TouchableHighlight style={styles.plusSign} onPress={() => addGoal()}>
            <View>
              <View style={styles.crossUp} />
              <View style={styles.crossFlat} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default Header;
