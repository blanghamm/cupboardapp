import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import Navigation from './navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

import firebase from './firebase/config';

let addItem = item => {
  firebase.database().ref('/items').push({
    name: item
  });
  console.log(item)
  
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
     
    };

  }

  handleChange = e => {
    this.setState({
        name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert('Item saved successfully');
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} placeholder="Add Item name" />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
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


