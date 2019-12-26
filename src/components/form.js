import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
  TextInput,
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
import Numentry from './num-entry';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
    };
  }

  componentDidMount() {
    this.addTextInput(this.state.textInput.length);
  }

  state = {
    ingredient: '',
  };

  nextEntry = () => {
    console.log('Ingredient: ' + this.state.ingredient);
    console.log('Quantity: ' + this.state.quantVar);
    console.log();
    this.addTextInput(this.state.textInput.length);
    this.textInput;
  };

  addTextInput = key => {
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        key={key}
        // value="ingredient"
        placeholder="Enter an ingredient"
        style={{
          fontSize: 20,
          minWidth: 200,
          fontFamily: Typography.bodyRegular,
        }}
        onChangeText={value => this.setState({ingredient: value})}
        onSubmitEditing={this.nextEntry}
      />,
      <Numentry />,
    );
    this.setState({textInput});
  };
  render() {
    let quantVar = this.state.quantVar;
    return (
      <SafeAreaView
        style={{
          // paddingTop: 30,
          paddingHorizontal: 30,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          {this.state.textInput.map((value, index) => {
            return value;
          })}
        </View>
        <TouchableOpacity
          onPress={this.nextEntry}
          style={{paddingTop: 20, alignSelf: 'center'}}>
          <Icon
            style={{}}
            name="plus"
            color={Colors.grey}
            size={30}
            onPress={this.nextEntry}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
