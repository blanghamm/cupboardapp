import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './navigation';
import { ScrollView } from 'react-native-gesture-handler';

import { TextInput } from 'react-native-paper';

import firebase from './firebase';

var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('/users/randomtext' + userId).set({
    username: a,
    email: a,
    profile_picture : a
  });
}

console.log(firebase.name);
console.log(firebase.database());

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20}}>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <Text style={{ fontSize: 24,fontWeight: '700'}}>
              What on earth
              </Text>

              <TextInput label='Text' value={this.state.text}
              onChangeText={text => this.setState({ text })}
              />

            </ScrollView>



        </View>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
