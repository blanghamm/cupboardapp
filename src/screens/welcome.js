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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// class Welcome extends React.Component {

class Welcome extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
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
          <Text style={Styles.welcomeTextBlack}>{this.props.displayName}</Text>
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
            <TouchableOpacity
              style={[Styles.halfButton, Styles.greyButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.peachButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>Shopping List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Your Recipes</Text>
        </View>
        <Recipecarousel />
        <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={() => this.props.navigation.navigate('Recipes')}>
            <Text style={Styles.buttonText}>View recipes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Welcome);
