import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';

import Loading from './loading';
import Login from './login';
import Signup from './signup';
import Welcome from '../screens/welcome';
import Cupboard from '../screens/cupboard';
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
    Main: {
      screen: Navigation,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(userauth);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AppContainer);
