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
let count = -1;

export default class Methodform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      enteredText: [],
    };
  }

  componentDidMount() {
    this.addTextInput(this.state.textInput.length);
    this.setState({
      stepCount: 1,
    });
  }

  state = {
    step: '',
    stepCount: 1,
    stepCountDisplay: 1,
  };

  nextEntry = () => {
    console.log('Step: ' + this.state.stepCount);
    console.log(this.state.step);
    console.log();
    this.state.stepCountDisplay = this.state.stepCount;
    this.addTextInput(this.state.textInput.length);
    this.textInput;
    this.displayText(this.state.enteredText.length);
    this.enteredText;
  };

  addTextInput = key => {
    count = count + 1;
    this.state.textInput[count] = null;
    this.state.stepCount = this.state.stepCount + 1;
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        key={key}
        placeholder="Enter a step"
        style={{
          fontSize: 20,
          minWidth: 200,
          fontFamily: Typography.bodyRegular,
        }}
        onChangeText={value => this.setState({step: value})}
        onSubmitEditing={this.nextEntry}
      />,
    );
    this.setState({textInput});
  };

  displayText = key2 => {
    let enteredText = this.state.enteredText;
    enteredText.push(
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontFamily: Typography.bodyBold}}>
          {this.state.stepCountDisplay}.
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Typography.bodyBold,
            paddingLeft: 10,
          }}>
          {this.state.step}
        </Text>
      </View>,
    );
    this.setState({enteredText});
  };

  render() {
    let stepCount = this.state.stepCount;
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
          {this.state.enteredText.map((value, index) => {
            return value;
          })}
          {this.state.textInput.map((value, index) => {
            return value;
          })}
        </View>
        <TouchableOpacity
          onPress={this.nextEntry}
          style={{
            paddingTop: 20,
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            style={{paddingRight: 10}}
            name="plus"
            color={Colors.grey}
            size={30}
            onPress={this.nextEntry}
          />
          <Text style={[Styles.bodyText, {color: Colors.grey}]}>
            Add another step
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
