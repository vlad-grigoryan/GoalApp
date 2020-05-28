import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {backgrounds} from '../../initialData';
import Background from '../Background';

interface Props {
  bgChange: (index: number) => void;
  bgIndex: number;
}
const BackgroundList = ({bgChange, bgIndex}: Props) => {
  return (
    <View style={styles.formSection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.backgroundsSelector}>
        <View style={styles.backgroundItems}>
          {backgrounds.map((background, index) => (
            <TouchableOpacity
              key={index}
              style={styles.backgroundItem}
              onPress={() => bgChange(index)}>
              <View key={index} style={styles.backgroundItemCircle}>
                <Background {...background} />
              </View>
              {index === bgIndex && (
                <MaterialIcon
                  style={styles.backgroundItemIcon}
                  name="check-circle"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default BackgroundList;
