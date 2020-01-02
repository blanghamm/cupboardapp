import React from 'react';
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

class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logosize} source={require('../assets/icon.png')} />
        <Text style={styles.textformat}>CUPBOARD</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

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
