import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Form from '../components/form';

let addItem = item => {
  firebase
    .database()
    .ref('/items')
    .push({
      name: item,
    });
  console.log(item);
};

export default class manual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
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
      // <View style={{flex: 1, backgroundColor: 'white', paddingTop: 0}}>
      // <Text style={{fontSize: 50}}>Welcome</Text>
      // <TextInput
      //   style={styles.itemInput}
      //   onChange={this.handleChange}
      //   placeholder="Add Item"
      // />
      // <TouchableHighlight
      //   style={styles.button}
      //   underlayColor="white"
      //   onPress={this.handleSubmit}>
      //   <Text style={styles.buttonText}>Add</Text>
      // </TouchableHighlight>
      // <Text style={{fontSize: 20}}>Add Item</Text>
      // <TextInput
      //   style={{fontSize: 20}}
      //   onChange={this.handleChange}
      //   placeholder="Add Second Item"
      // />
      // <TouchableHighlight
      //   style={Styles.button}
      //   underlayColor="white"
      //   onPress={this.handleSubmit}>
      //   <Text style={{fontSize: 20}}>Add</Text>
      // </TouchableHighlight>
      // </View>

      <Form />
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
