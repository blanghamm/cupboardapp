import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableHighlight, 
  Alert
} from 'react-native';
import firebase from '../firebase/config';
import manualadd from './addoptions/manualadd';
import cameraadd from './addoptions/cameraadd';

let addItem = item => {
  firebase.database().ref('/items').push({
    name: item
  });
  console.log(item)
  
};

export default class camera extends Component {
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
