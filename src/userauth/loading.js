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
import {signOut} from '../store/actions/authActions';

class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(auth => {
      this.props.navigation.navigate({auth} ? 'Loading' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logosize} source={require('../assets/icon.png')} />
        <Text style={styles.textformat}>CUPBOARD</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

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
