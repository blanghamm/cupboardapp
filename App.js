import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Navigation from './navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
        <View style={{ alignItems: 'center', height: 130, marginTop: 20 }}>
          <ScrollView>
            <Text style={{ flex:1, fontSize: 24,fontWeight: '700', }}>
              What on earth?
              </Text>           
            </ScrollView>



        </View>
        <Navigation />
      </View>
    );
  }
}


