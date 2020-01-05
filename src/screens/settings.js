import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import Styles from '../styles';
import Colors from '../styles/colors';
import {signout} from '../store/actions/authActions';
import Icon from 'react-native-vector-icons/Feather';

const Settings = ({navigation, profile, signout}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: 100}}>
        <TouchableOpacity>
          <Icon
            style={{padding: 30}}
            name="arrow-left"
            color={Colors.black}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.centerElement}>
        <Text style={[Styles.titleLower, {paddingTop: 10}]}>Account</Text>
        <Text style={[Styles.subTitle, {color: Colors.black}]}>
          Name: {profile.Name}
        </Text>
        <Text style={[Styles.subTitle, {color: Colors.black}]}>
          Email: {profile.Email}
        </Text>

        <TouchableOpacity style={[Styles.halfButton, Styles.aquaButton]}>
          <Text
            style={[Styles.buttonText, {color: Colors.offWhite}]}
            onPress={() => {
              signout();
              navigation.navigate('Loading');
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {signout: () => dispatch(signout())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
