import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import Splash from './add-splash';
import manualingredients from './manual-ingredients';
import camera from './camera-upload';
import manualname from './manual-name';

const SplashNav = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    manualingredients: {screen: manualingredients},
    manualname: {screen: manualname},
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
