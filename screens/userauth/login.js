import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null }

  handleLogin = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Welcome'))
    .catch(error => this.setState({ errorMessage: error.message }))
    console.log('handleLogin')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Login</Text>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>}
      <TextInput
        style={styles.TextInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => this.setState ({ email
      })}

        value={this.state.email}
      />
      <TextInput secureTextEntry style={style.textInput}
      autoCapitalize="none"
      placeholder="password"
      onChangeText={password => this.setState({ Password
      })}
      value={this.state.password}
      />
      <Button title="Don't have an account? Sign Up"
      onPress={() =>
      this.props.navigation.navigate('SignUp')}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
