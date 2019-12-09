import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';
import Styles from '../styles';

class Welcome extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

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
          <View style={Styles.bannerBlock}>
            <View style={{width: '70%'}}>
              <Text style={(Styles.bodyText, {fontSize: 24})}>
                You’re nearly stocked up msg//
              </Text>
            </View>
            <View style={{width: '30%'}}>
              <Text style={(Styles.bodyText, {fontSize: 24})}>graph// </Text>
            </View>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Ready to shop?</Text>
          <Text style={Styles.bodyText}>Your nearest shop is //DATA//</Text>
          <View style={Styles.halfButtonBlock}>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.greyButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.peachButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Your Recipes</Text>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={this.onPress}>
            <Text style={Styles.buttonText}>View map</Text>
          </TouchableOpacity>
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
});
