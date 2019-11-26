import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import Navigation from './src/navigation';
import NavStack from './src/userauth/navstack.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 0}}>
        <NavStack />
        {/* <Navigation /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131420',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});
