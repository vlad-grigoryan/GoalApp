import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import Background from './../Background';

const Mask = ({children, style = {}}) => (
  <MaskedView style={style} maskElement={children}>
    <Background
      layers={[
        {
          colors: ['#7642EE', '#603FE6'],
          start: {x: 0, y: 0.4},
          end: {x: 1, y: 0.6},
        },
      ]}
    />
  </MaskedView>
);

export default Mask;
