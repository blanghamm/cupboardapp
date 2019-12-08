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
import {Carousel} from 'react-native-snap-carousel';
import firebase from '../firebase/config';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';
import Styles from '../styles';

class Welcome extends React.Component {
  render() {
    return (
      <View>
        <View style={[Styles.standardBlock, Styles.centerElement]}>
          <Image
            style={Styles.largeIcon}
            source={require('../assets/icon.png')}
          />
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.welcomeTextGrey}>hello,</Text>
          <Text style={Styles.welcomeTextBlack}>Username</Text>
        </View>
        <View style={Styles.wideBlock}>
          <Text style={Styles.welcomeTextGrey}>You’re nearly stocked up</Text>
        </View>
        <View>
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.navigate('Loading')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Welcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
  },
});
