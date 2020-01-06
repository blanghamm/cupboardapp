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
  ScrollView,
  Alert,
} from 'react-native';
import firebase, {db} from '../firebase/config';
import Styles from '../styles';
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
let count = -1;

class Methodform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      enteredText: [],
    };
  }

  componentDidMount() {
    this.setState({
      docStepCount: 0,
      stepCount: 1,
    });
    this.addTextInput(this.state.textInput.length);
  }

  state = {
    step: '',
    stepCountDisplay: 1,
  };

  nextEntry = () => {
    this.state.docStepCount = this.state.docStepCount + 1;

    var uid = this.props.uid;
    console.log(uid);
    var docStepCount = this.state.docStepCount.toString();
    var stepDesc = this.state.step;

    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .get()
      .then(function(querySnapshot) {
        var recipeAmount = querySnapshot.size;
        console.log(recipeAmount);
        var docName = recipeAmount.toString();
        db.collection('users')
          .doc(uid)
          .collection('recipes')
          .doc(docName)
          .collection('method')
          .doc(docStepCount)
          .set({stepDesc: stepDesc});
      });

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
      <View style={{flexDirection: 'column', flex: 1}}>
        <ScrollView
          style={{
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
              paddingBottom: 30,
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
        </ScrollView>
        <View style={Styles.bigBottomButton}>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={() => this.props.navigation.navigate('Cupboard')}>
            <Text style={Styles.buttonText}>Publish recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps)(Methodform);
