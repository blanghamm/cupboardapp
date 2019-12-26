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

export default class FormEntry extends React.Component {
  state = {
    ingredient: '',
  };

  onPressButton = () => {
    console.log(this.state.ingredient);
    this.textInput;
  };

  render() {
    const {ingredient, author} = this.state;
    return (
      <SafeAreaView
        style={{
          // paddingTop: 30,
          paddingHorizontal: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={ingredient}
          placeholder="Enter an ingredient"
          style={{
            fontSize: 20,
            width: '80%',
            fontFamily: Typography.bodyRegular,
          }}
          onChangeText={value => this.setState({ingredient: value})}
          onSubmitEditing={this.onPressButton}
        />
        <TouchableOpacity onPress={this.onPressButton}>
          <Icon
            style={{}}
            name="corner-down-left"
            color={Colors.grey}
            size={30}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
