/*
App: Cupboard
Page Type: Component
Page Name: Loading

This page is when the app first loads up, it looks similar to 
laodng-login but this only displays for 2.5 seconds and then displays 
the login screen. This is just so when the app is booting it's not just
a blank screen.


*/

import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Loading = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2500);
  return (
    <View style={styles.container}>
      <Image style={styles.logosize} source={require('../assets/icon.png')} />
      <Text style={styles.textformat}>CUPBOARD</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3AD9F',
  },
  logosize: {
    width: 52,
    height: 52,
    tintColor: '#FAF7F2',
  },
  textformat: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 32,
    margin: 15,
    color: '#FAF7F2',
  },
});
