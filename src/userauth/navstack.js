import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';

//import Loading from './loading';
import Login from './login';
import Signup from './signup';
import Welcome from '../screens/welcome';
import Main from '../screens/main';

const userauth = createSwitchNavigator(
  {
    //Loading,
    Login,
    Signup,
    Welcome,
    Main,
  },
  {
    initialRouteName: 'Signup',
  },
);

const AppContainer = createAppContainer(userauth);

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(AppContainer);
