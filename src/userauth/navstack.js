import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

//import Loading from './loading';
import Login from './login';
import Signup from './signup';
import Welcome from '../screens/welcome';

const userauth = createSwitchNavigator(
  {
    //Loading,
    Login,
    Signup,
    Welcome,
  },
  {
    initialRouteName: 'Signup',
  },
);

export default createAppContainer(userauth);
