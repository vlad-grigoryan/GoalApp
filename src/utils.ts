import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const goalItemWidth = deviceWidth * 0.75;
export const goalItemHeight = deviceHeight * 0.5;
export const goalItemWrapper = deviceHeight * 0.9;
export const centralizedWidth = (deviceWidth - goalItemWidth) / 2;
