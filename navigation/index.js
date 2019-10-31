import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../screens/welcome.js';
import Camera from '../screens/camera.js';
import Cupboard from '../screens/cupboard.js';


const screens = createBottomTabNavigator({
  Welcome,
  Camera,
  Cupboard,

  Welcome: {
      screen: Welcome,
      navigationOptions:{
          tabBarLabel: 'WELCOME',
          tabBarIcon: ({tintColor})=> (
            <Icon name= 'md-home' color={tintColor} size={24} />
        )
      },
  },
  Camera: {
    screen: Camera,
    navigationOptions:{
        tabBarLabel: 'CAMERA',
        tabBarIcon: ({tintColor})=> (
            <Icon name= 'md-camera' color={tintColor} size={24} />
        )
    },
},
Cupboard: {
    screen: Cupboard,
    navigationOptions:{
        tabBarLabel: 'CUPBOARD',
        tabBarIcon: ({tintColor})=> (
            <Icon name= 'md-cube' color={tintColor} size={24} />
        )
    },
},
}, {
  defaultNavigationOptions: {
    navigationOptions: {
      backgroundColor: 'black',
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
  },  
});



export default createAppContainer(screens);  