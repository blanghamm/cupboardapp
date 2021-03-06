/*
App: Cupboard
Page Type: Component
Page Name: Welcome


When a user logs in this is the initial page 
they are greeted by, it displays their nickname
which has been gathered from the database. This has 
been passed down via properties using the redux store.

It also imports the recipe carousel component and displays 
a card view with recipe titles, this updates when recipes are 
added to the users collection.


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
import {signout} from '../store/actions/authActions';

// class Welcome extends React.Component {

const Welcome = ({navigation, profile}) => {
  return (
    <ScrollView>
      <View style={[Styles.standardBlock, Styles.centerElement]}>
        <Image
          style={Styles.largeIcon}
          source={require('../assets/icon.png')}
        />
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.welcomeTextGrey}>hello,</Text>
        <Text style={Styles.welcomeTextBlack}>{profile.Name}</Text>
      </View>
      <View style={Styles.wideBlock}>
        <View style={Styles.bannerBlock}>
          <View style={{width: '70%'}}>
            <Text style={(Styles.bodyText, {fontSize: 24})}>
              You’re nearly stocked up msg//
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <Text style={(Styles.bodyText, {fontSize: 24})}>graph// </Text>
          </View>
        </View>
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.bodyTitle}>Ready to shop?</Text>
        <Text style={Styles.bodyText}>Your nearest shop is //DATA//</Text>
        <View style={Styles.halfButtonBlock}>
          <TouchableOpacity style={[Styles.halfButton, Styles.greyButton]}>
            <Text style={Styles.buttonText}>View map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.halfButton, Styles.peachButton]}>
            <Text style={Styles.buttonText}>Shopping List</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.bodyTitle}>Recipes</Text>
      </View>
      <Recipecarousel />
      <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
        <TouchableOpacity
          style={[Styles.fullButton, Styles.greyButton]}
          onPress={() => navigation.navigate('Recipedisplaymain')}>
          <Text style={Styles.buttonText}>View recipes</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
