import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Welcome from '../screens/welcome.js';
import Cupboard from '../screens/cupboard.js';
import Manualname from '../screens/manual-name';
import Manualingredients from '../screens/manual-ingredients';
import Manualmethod from '../screens/manual-method';
import Camera from '../screens/camera-upload';
import Settings from '../screens/settings';
import SplashNav from '../screens/add-splash';
import Recipedisplay from '../screens/recipedisplay/recipe-display';
import Colors from '../styles/colors';

var cupboardCount = 0;
var tintColorPng = Colors.grey;

const Screens = createBottomTabNavigator(
  {
    Welcome,
    SplashNav,
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
    SplashNav: {
      screen: SplashNav,
      navigationOptions: {
        tabBarLabel: 'ADD',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="plus"
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
          <Image
            source={require('../assets/icon.png')}
            style={{
              width: 25,
              height: 25,
              alignSelf: 'center',
              marginBottom: 20,
              tintColor: {tintColor}.tintColor,
            }}
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
      tintColor: Colors.grey,
      activeTintColor: Colors.peach,
      tabStyle: {
        paddingBottom: 10,
        paddingVertical: 30,
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 10},
        shadowColor: 'black',
        height: 60,
      },
    },
  },
);

const rootNavigator = createStackNavigator(
  {
    Screens: {screen: Screens},
    Manualname: {screen: Manualname},
    Manualingredients: {screen: Manualingredients},
    Manualmethod: {screen: Manualmethod},
    Settings: {screen: Settings},
    Recipedisplay: {screen: Recipedisplay},
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const Navigation = createAppContainer(rootNavigator);

export default Navigation;
