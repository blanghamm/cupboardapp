import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import Splash from './add-splash';
import manual from './manual-upload';
import camera from './camera-upload';

const SplashNav = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    manual: {screen: manual},
    camera: {screen: camera},
  },
  {
    initialRouteName: 'Splash',
  },
  {
    headerMode: 'none',
    mode: 'card',
  },
);

export default SplashNav;
