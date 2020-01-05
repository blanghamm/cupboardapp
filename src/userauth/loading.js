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
