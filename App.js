import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import Navigation from './navigation';
import { SwitchNavigator } from 'react-navigation';


import Loading from './screens/loading';
import SignUp from './screens/signup';
import Login from './screens/login';
import Welcome from './screens/welcome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''

    };

  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
        <SignUp/>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#131420',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});
