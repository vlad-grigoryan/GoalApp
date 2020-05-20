import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Background = ({layers = []}) => {
  return (
    <>
      {layers.map((layer, index) => (
        <LinearGradient {...layer} style={styles.itemBackground} key={index} />
      ))}
    </>
  );
};

export default Background;
