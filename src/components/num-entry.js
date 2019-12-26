import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Typography from '../styles/typography';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {increment, decrement} from '../store/actions/stockActions';

const Numentry = ({stocknumber, increment, decrement}) => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={decrement}>
        <Icon style={{}} name="minus" color={Colors.grey} size={30} />
      </TouchableOpacity>
      <View>
        <Text
          style={[
            Typography.bodyBold,
            {fontSize: 20, color: Colors.grey, paddingHorizontal: 5},
          ]}>
          {stocknumber}
        </Text>
      </View>
      <TouchableOpacity onPress={increment}>
        <Icon style={{}} name="plus" color={Colors.grey} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  stocknumber: state.stocknumber,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Numentry);
