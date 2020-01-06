/*
App: Cupboard
Page Type: Component
Page Name: Splash 

This page is displayed when the user clicks on the plus
it will ask how you would like to upload a recipe, currently 
we are only able to add a recipe manually but future implmentation
would use Ml kit to take a picture of a handwritten recipe and add it.

*/

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Splash extends Component {
  render() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('Manualname');
    // }, 50);
    return (
      <View style={{flex: 1}}>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={this.onPressButton}>
            <Icon
              style={{padding: 30}}
              name="arrow-left"
              color={Colors.black}
              size={30}
              onPress={() => this.props.navigation.navigate('Welcome')}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.standardBlock, {paddingTop: '30%'}]}>
          <Text style={[{paddingBottom: 30}, Styles.modalTitle]}>
            Add a recipe
          </Text>
          <View style={Styles.halfButtonBlock}>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.peachButton]}
              onPress={() => this.props.navigation.navigate('Camera')}>
              <Text style={Styles.buttonText}>Camera Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.greyButton]}
              onPress={() => this.props.navigation.navigate('Manualname')}>
              <Text style={Styles.buttonText}>Manual Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;
