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

export default class NewEntry extends React.Component {
  state = {
    ingredient: '',
  };

  onPressButton = () => {
    console.log(this.state.ingredient);
    this.textInput;
  };

  newIngredient = () => {
    console.log(this.state.ingredient);
    this.textInput;
  };

  render() {
    const {ingredient, author} = this.state;
    return (
      <SafeAreaView
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={this.newIngredient}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon style={{}} name="plus" color={Colors.grey} size={30} />
          {/*
          <Text
            style={[
              Styles.bodyText,
              {
                paddingLeft: 10,
                fontSize: 16,
                color: Colors.grey,
              },
            ]}>
            Add another ingredient
          </Text>
          */}
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
