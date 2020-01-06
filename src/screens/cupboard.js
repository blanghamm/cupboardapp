/*
App: Cupboard
Page Type: Component
Page Name: Cupboard

Cupboard page which can be navigated to via the tab navigator,
displays the users name and profile and then pulls in recipes display 
component to show your current recipes.

Also pulls in the users profile name from redux state and allows us to
display it depending on which user is signed in.


*/

import React, {Component} from 'react';
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
import {connect} from 'react-redux';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import ItemCategoryBox from '../components/item-category-box';
import Recipedisplay from './recipedisplay/recipe-display';

const Cupboard = ({navigation, profile, signout}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 30,
          paddingTop: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <Icon style={{}} name="settings" color={Colors.black} size={30} />
        </TouchableOpacity>
      </View>
      <View style={Styles.centerElement}>
        <Image
          source={require('../assets/user.png')}
          style={{width: 110, height: 110, borderRadius: 400 / 2}}
        />
        <Text style={[Styles.titleLower, {paddingTop: 10}]}>My Cupboard</Text>
        <Text style={Styles.subTitle}>{profile.Name}</Text>
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.cupboardTitle}>Recipes</Text>
        <Recipedisplay />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {signout: () => dispatch(signout())};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cupboard);
