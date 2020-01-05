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
} from 'react-native';
import Welcome from '../screens/welcome.js';
import SplashNav from '../screens/add-splash-nav.js';
import Cupboard from '../screens/cupboard.js';
import Manualname from '../screens/manual-name';
import Manualingredients from '../screens/manual-ingredients';
import Manualmethod from '../screens/manual-method';
import Camera from '../screens/camera-upload';

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
        // tabBarOnPress: ({navigation}) => {
        //   console.log('Clicked');
        //   Alert.alert(
        //     'Add a recipe',
        //     '',
        //     [
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel clicked'),
        //         style: 'cancel',
        //       },
        //       {
        //         text: 'Manual',
        //         // onPress: () => ,
        //       },
        //       {
        //         text: 'Camera',
        //         onPress: () => console.log('Camera Pressed'),
        //         style: 'positive',
        //       },
        //     ],
        //     {cancelable: true},
        //   );
        //   // recipeModal();
        // },
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

const rootNavigator = createStackNavigator(
  {
    Screens: {screen: Screens},
    Manualname: {screen: Manualname},
    Manualingredients: {screen: Manualingredients},
    Manualmethod: {screen: Manualmethod},
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const Navigation = createAppContainer(rootNavigator);

export default Navigation;
