import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const nav = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel:"HOME",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color="#900" />
        )
      },
    },
  },
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      tabBarOptions: {
        showIcon: 'true',
        showLabel: 'true',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  )
);