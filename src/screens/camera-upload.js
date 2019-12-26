import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';

export default class Camera extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 0}}>
        <Text style={Styles.title}>Camera Page</Text>
      </View>
    );
  }
}
