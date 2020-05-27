import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {BackgroundModel} from '../../interfaces';

const Background = ({layers}: BackgroundModel) => {
  return (
    <>
      {layers.map((layer, index) => (
        <LinearGradient {...layer} style={styles.itemBackground} key={index} />
      ))}
    </>
  );
};

export default Background;
