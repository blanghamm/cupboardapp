import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';
import {createSwitchNavigator} from 'react-navigation';

/*
App: Cupboard
Page Type: Nav
Page Name: Navstack

Main navstack for entire application, pulls in all the
userauth screens and main navigation from the bulk of the app.

This allows for navigation between each user auth screen and once 
firebase has been initialised it will then navigate to the main application and enable 
the navigators inside of the main navigation.


*/

import Loading from './loading';
import Login from './login';
import Signup from './signup';
import Loadinglogin from './loading-login';
import Navigation from '../navigation/index';

const userauth = createSwitchNavigator(
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
