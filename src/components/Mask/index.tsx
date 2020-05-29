import MaskedView from '@react-native-community/masked-view';
import React, {ReactElement} from 'react';
import Background from './../Background';

interface Props {
  children: ReactElement;
  style: any;
}
const Mask = ({children, style = {}}: Props) => (
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
