import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  updateEmail,
  updatePassword,
  login,
  getUser,
} from '../store/actions/authActions';
import firebase from '../firebase/config';

class Login extends React.Component {
  state = {email: '', password: ''};

  // handleLogin = e => {
  //   e.preventDefault();
  //   this.props.signIn(this.state);
  //   console.log(this.state);
  // };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.getUser(user.uid);
        if (this.props.user != null) {
          this.props.navigation.navigate('Welcome');
        }
      }
    });
  };

  // handleLogin = () => {
  //   this.props.login();
  //   this.props.navigation.navigate('Welcome');
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.props.updateEmail(email)}
          value={this.props.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.props.updatePassword(password)}
          value={this.props.password}
        />
        <Button
          title="Login"
          onPress={() => this.props.login()}
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateEmail, updatePassword, login, getUser},
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
