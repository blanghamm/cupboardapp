import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
let count = -1;
let dataCount = 0;

class Ingredientsform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      enteredText: [],
      title: props.navigation.state.params.title,
    };
  }

  componentDidMount() {
    console.log('ingredients form :' + this.state.title);
    this.addTextInput(this.state.textInput.length);
    this.setState({
      quantVar: 1,
    });
  }

  state = {
    ingredient: '',
    quantVar: 1,
    quantSep: 1,
  };

  minQ = value => {
    if (this.state.quantVar > 1) {
      this.setState({
        quantVar: this.state.quantVar - 1,
      });
    }
  };

  plusQ = value => {
    this.setState({
      quantVar: this.state.quantVar + 1,
    });
  };

  nextEntry = () => {
    dataCount = dataCount + 1;
    console.log('Ingredient: ' + this.state.ingredient);
    console.log('Quantity: ' + this.state.quantVar);

    var ingredientOp = this.state.ingredient;

    var docName = this.state.title;

    var uid = this.props.uid;

    var ref = firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('recipes')
      .doc(docName)
      .collection('ingredients')
      .doc(ingredientOp);

    var merge = ref.set(
      {
        category: this.state.ingredient,
        quantity: this.state.quantVar,
      },
      {merge: true},
    );

    this.state.quantSep = this.state.quantVar;
    this.addTextInput(this.state.textInput.length);
    this.textInput;
    this.displayText(this.state.enteredText.length);
    this.enteredText;
  };

  submitIngredients = () => {
    console.log('Ingredient: ' + this.state.ingredient);
    console.log('Quantity: ' + this.state.quantVar);
    console.log();
    this.state.quantSep = this.state.quantVar;
    this.addTextInput(this.state.textInput.length);
    this.textInput;
    this.displayText(this.state.enteredText.length);
    this.enteredText;
    this.props.navigation.navigate('Manualmethod', {
      title: this.state.title,
    });
  };

  addTextInput = key => {
    count = count + 1;
    this.state.textInput[count] = null;
    this.state.quantVar = 1;
    let textInput = this.state.textInput;
    textInput.push(
      <TextInput
        key={key}
        placeholder="Enter an ingredient"
        style={{
          fontSize: 20,
          minWidth: 200,
          fontFamily: Typography.bodyRegular,
        }}
        onChangeText={value => this.setState({ingredient: value})}
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
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontFamily: Typography.bodyBold}}>
          {this.state.ingredient}
        </Text>
        <Text style={{fontSize: 20, fontFamily: Typography.bodyBold}}>
          {this.state.quantSep}
        </Text>
      </View>,
    );
    this.setState({enteredText});
  };

  render() {
    let quantVar = this.state.quantVar;
    return (
      <View
        style={{
          paddingHorizontal: 30,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
        <ScrollView>
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
              Add another ingredient
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{paddingVertical: 30}}>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={this.submitIngredients}>
            <Text style={Styles.buttonText}>Add the method</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps)(Ingredientsform);
