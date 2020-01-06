/*
App: Cupboard
Page Type: Component
Page Name: Item Category

Not used

*/

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Recipecarousel from '../components/recipe-carousel';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {signout} from '../store/actions/authActions';
import firebase, {db} from '../firebase/config';
var firestoreInfoEmail = '';
var firestoreInfo;

class ItemCategoryBox extends React.Component {
  componentDidMount() {
    var uid = this.props.uid;
    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .get()
      .then(function(querySnapshot) {
        var recipeAmount = querySnapshot.size;
        var docName = recipeAmount.toString();
        db.collection('users')
          .doc(uid)
          .collection('recipes')
          .doc(docName)
          .get()
          .then(function(doc) {
            if (doc.exists) {
              firestoreInfo = doc.data();
              firestoreInfoEmail = firestoreInfo.category;
            } else {
              console.log('No Document');
            }
          })
          .then(() => {
            console.log(firestoreInfoEmail);

            this.setState({
              ingredientsList: [],
            });
          })
          .catch(function(error) {
            console.log('Error', error);
          });
      });
  }
  constructor(props) {
    super(props);
    this.state = {ingredientsList: []};
  }
  render() {
    const profile = this.props.profile;
    return (
      <TouchableOpacity
        style={Styles.itemContainer}
        onPress={() => {
          console.log('pressed');
        }}>
        <Text style={Styles.itemText}>{firestoreInfoEmail}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    cupboard: state.firestore.cupboard,
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {signout: () => dispatch(signout())};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCategoryBox);
