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
    <View style={{flexDirection: 'column', flex: 1}}>
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
        <Image
          source={require('../assets/user.png')}
          style={{width: 110, height: 110, borderRadius: 400 / 2}}
        />
        <Text style={[Styles.titleLower, {paddingTop: 20}]}>My Account</Text>
        <Text style={[Styles.subTitle, {color: Colors.black}]}>
          {profile.Email}
        </Text>
      </View>
      <View style={Styles.bigBottomButton}>
        <TouchableOpacity style={[Styles.fullButton, Styles.greyButton]}>
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
