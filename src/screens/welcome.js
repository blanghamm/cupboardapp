import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';

class Welcome extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Image style={styles.PngColor} source={require('../assets/icon.png')} />

        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Loading')}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
  },
  PngColor: {
    tintColor: '#faf',
    width: 50,
    height: 50,
  },
});
