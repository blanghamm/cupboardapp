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
import firebase from '../firebase/config';

const thisThing = () => {
  firebase
    .firestore()
    .collection('user1')
    .doc('hi')
    .get();
};

console.log(thisThing);

const ItemCategoryBox = ({profile, cupboard}) => {
  return (
    <TouchableOpacity
      style={Styles.itemContainer}
      onPress={() => {
        console.log('pressed');
      }}>
      <Text style={Styles.itemText}>{profile.Name}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    cupboard: state.firestore.cupboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {signout: () => dispatch(signout())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemCategoryBox);
