import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Loading from './loading';
import Login from './login';
import Signup from './signup';
import Loadinglogin from './loading-login';
import Navigation from '../navigation/index';

const userauth = createAnimatedSwitchNavigator(
  {
    Loading: {
      screen: Loading,
    },
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Loadinglogin: {
      screen: Loadinglogin,
    },
    Main: {
      screen: Navigation,
    },
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="fade"
          durationMs={400}
          interpolation="easeInOut"
        />
        <Transition.In type="fade" durationMs={400} interpolation="easeInOut" />
      </Transition.Together>
    ),
  },

  {
    initialRouteName: 'Loading',
  },
);

const AppContainer = createAppContainer(userauth);

export default AppContainer;
