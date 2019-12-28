import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import Splash from './add-splash';
import manualingredients from './manual-ingredients';
import camera from './camera-upload';

const SplashNav = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    manualingredients: {screen: manualingredients},
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
