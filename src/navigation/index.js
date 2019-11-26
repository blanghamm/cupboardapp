import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Welcome from '../screens/welcome.js';
import Camera from '../screens/camera.js';
import Cupboard from '../screens/cupboard.js';

const screens = createBottomTabNavigator(
  {
    Welcome,
    Camera,
    Cupboard,

    Welcome: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'WELCOME',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="home"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
    Camera: {
      screen: Camera,
      navigationOptions: {
        tabBarLabel: 'CAMERA',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="camera"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
    Cupboard: {
      screen: Cupboard,
      navigationOptions: {
        tabBarLabel: 'CUPBOARD',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="coffee"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      navigationOptions: {
        tabStyle: {
          marginTop: 20,
        },
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
    },
    tabBarOptions: {
      height: 20,
      showLabel: false,
      tintColor: '#2e4057',
      activeTintColor: '#e08dac',
      tabStyle: {
        paddingBottom: 10,
        paddingVertical: 30,
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 10},
        shadowColor: 'black',
      },
    },
  },
);

export default createAppContainer(screens);
