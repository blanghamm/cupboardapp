import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
// import {connect} from 'react-redux';
// import {signUp} from '../store/actions/authActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import firebase from '../firebase/config';
import {signup} from '../store/actions/authActions';
import {Formik, ErrorMessage} from 'formik';

class SignUp extends React.Component {
  state = {displayName: '', email: '', password: ''};

  handleSignUp = e => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      this.props.navigation.navigate('Welcome');
      return;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={displayName => this.setState({displayName})}
          value={this.state.displayName}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Skip This"
          onPress={() => this.props.navigation.navigate('Welcome')}
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

export default connect(mapStateToProps)(SignUp);

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
