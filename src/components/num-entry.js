import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';

export default class Numentry extends React.Component {
  state = {
    ingredient: '',
    quantVar: 1,
  };

  minQ = () => {
    if (this.state.quantVar > 1) {
      this.setState({
        quantVar: this.state.quantVar - 1,
      });

      console.log(this.state.quantVar);
    }
  };

  plusQ = () => {
    this.setState({
      quantVar: this.state.quantVar + 1,
    });
  };

  render() {
    let quantVar = this.state.quantVar;
    return (
      <SafeAreaView
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={this.minQ}>
          <Icon style={{}} name="minus" color={Colors.grey} size={30} />
        </TouchableOpacity>
        <Text
          style={[
            Typography.bodyBold,
            {fontSize: 20, color: Colors.grey, paddingHorizontal: 5},
          ]}>
          {this.state.quantVar}
        </Text>
        <TouchableOpacity onPress={this.plusQ}>
          <Icon style={{}} name="plus" color={Colors.grey} size={30} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
