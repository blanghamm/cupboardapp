/*
App: Cupboard
Page Type: Component
Page Name: Loading

This page is setup for when the user first logs in.
When the user first logs in it will navigate to this
page first to check if firebase isInitialising, if login has
failed or their detials are wrong it will bounce you back to the
login screen. If the detials are correct it will wait until 
firebase data has been read or written and then navigate the
user to the welcome screen.


*/

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import firebase from '../firebase/config.js';
import {connect} from 'react-redux';

const Loading = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // firebase.auth().onAuthStateChanged(user => {
  //   this.props.navigation.navigate(user ? 'Welcome' : 'Signup');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  //this.props.navigation.navigate(user ? 'Main' : 'Loading');
  if (!user) {
    return (
      <View style={styles.container}>
        <Image style={styles.logosize} source={require('../assets/icon.png')} />
        <Text style={styles.textformat}>CUPBOARD</Text>
        {/*}<Button
          title="clickhere"
          onPress={() => navigation.navigate('Signup')}
        />*/}
      </View>
    );
  }
  return (
    <View>
      <Text>{navigation.navigate('Welcome')}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Loading);

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
