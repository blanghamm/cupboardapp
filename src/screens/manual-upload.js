import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import FormEntry from '../components/form-entry-box';
import NewEntry from '../components/new-form-entry';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import Form from '../components/form';

let addItem = item => {
  firebase
    .database()
    .ref('/items')
    .push({
      name: item,
    });
  console.log(item);
};

export default class Manual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert('Item saved successfully');
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View>
        <TouchableOpacity onPress={this.onPressButton}>
          <Icon
            style={{padding: 30}}
            name="arrow-left"
            color={Colors.black}
            size={30}
            onPress={() => this.props.navigation.navigate('Splash')}
          />
        </TouchableOpacity>
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131420',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});
