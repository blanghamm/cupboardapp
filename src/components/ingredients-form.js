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
import firebase, {db} from '../firebase/config';
import Styles from '../styles';
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
let count = -1;
let dataCount = 0;
var recipeAmount = 0;

class Ingredientsform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
      enteredText: [],
      docCount: 0,
    };
  }

  componentDidMount() {
    this.addTextInput(this.state.textInput.length);
    this.setState({
      quantVar: 1,
    });
  }

  state = {
    ingredient: '',
    quantVar: 1,
    quantSep: 1,
    docCount: 0,
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
    this.state.docCount = this.state.docCount + 1;
    var uid = this.props.uid;
    var ingredientOp = this.state.ingredient;
    var category = this.state.ingredient;
    var quantity = this.state.quantVar;

    var docCountVar = this.state.docCount.toString();

    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .get()
      .then(function(querySnapshot) {
        var recipeAmount = querySnapshot.size;
        var docName = recipeAmount.toString();
        var ref = db
          .collection('users')
          .doc(uid)
          .collection('recipes')
          .doc(docName)
          .collection('ingredients')
          .doc(docCountVar);
        var merge = ref.set(
          {
            category: category,
            quantity: quantity,
          },
          {merge: true},
        );
      });

    dataCount = dataCount + 1;
    this.state.quantSep = this.state.quantVar;
    this.addTextInput(this.state.textInput.length);
    this.textInput;
    this.displayText(this.state.enteredText.length);
    this.enteredText;
  };

  submitIngredients = () => {
    this.state.docCount = this.state.docCount + 1;
    var uid = this.props.uid;
    var ingredientOp = this.state.ingredient;
    var category = this.state.ingredient;
    var quantity = this.state.quantVar;

    var docCountVar = this.state.docCount.toString();

    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .get()
      .then(function(querySnapshot) {
        var recipeAmount = querySnapshot.size;
        var docName = recipeAmount.toString();
        var ref = db
          .collection('users')
          .doc(uid)
          .collection('recipes')
          .doc(docName)
          .collection('ingredients')
          .doc(docCountVar);
        var merge = ref.set(
          {
            category: category,
            quantity: quantity,
          },
          {merge: true},
        );
      });
    console.log('Ingredient: ' + this.state.ingredient);
    console.log('Quantity: ' + this.state.quantVar);
    console.log();
    this.state.quantSep = this.state.quantVar;
    this.addTextInput(this.state.textInput.length);
    this.textInput;
    this.displayText(this.state.enteredText.length);
    this.enteredText;
    this.props.navigation.navigate('Manualmethod');
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
          flexDirection: 'column',
          flex: 1,
        }}>
        <ScrollView style={{paddingHorizontal: 30}}>
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
              Add another ingredient
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={Styles.bigBottomButton}>
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
