import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {signIn} from '../store/actions/authActions';

class Login extends React.Component {
  state = {email: '', password: ''};

  handleLogin = e => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.state);
  };

  render() {
    const {authError} = this.props;
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {authError ? <Text style={{color: 'red'}}>{authError}</Text> : null}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button
          title="Login"
          onPress={this.handleLogin}
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
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
  };
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
