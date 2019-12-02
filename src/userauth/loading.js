import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from '../firebase/config.js';
import {connect} from 'react-redux';

// const {auth} = this.props;

class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(auth => {
      this.props.navigation.navigate({auth} ? 'Welcome' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
  },
});
