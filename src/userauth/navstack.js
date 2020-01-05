import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {connect} from 'react-redux';
import {Transition} from 'react-native-reanimated';

import Loading from './loading';
import LoadingStart from './loadingstartup';
import Login from './login';
import Signup from './signup copy';
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
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(userauth);

export default AppContainer;
