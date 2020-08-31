import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Heart = ({ fillColor }) => (
  <View>
    <Svg viewBox="0 0 32 32" fill={fillColor}>
      <Path
        id="heart"
        d="M27.78131,11.92578c0,4.82666-6.13562,8.68128-11.0376,14.0686a.99978.99978,0,0,1-1.48742,0c-4.902-5.38732-11.03748-9.24194-11.03748-14.0686,0-5.52954,7.53626-9.48682,11.57507-3.82544a.25855.25855,0,0,0,.42029.00562C20.47992,2.43628,27.78131,6.39453,27.78131,11.92578Z"
      />
    </Svg>
  </View>
);

export default Heart;
