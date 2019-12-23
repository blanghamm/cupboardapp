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

export default class Form extends React.Component {
  state = {
    title: '',
    author: '',
  };

  render() {
    const {title, author} = this.state;
    return (
      <SafeAreaView>
        <View style={{fontSize: 20}}>
          <TextInput
            value={title}
            placeholder="Title of the book"
            style={{fontSize: 20}}
            onChangeText={value => this.setState({title: value})}
          />
          <TextInput
            value={author}
            placeholder="Name of the Author"
            style={{fontSize: 20}}
            onChangeText={value => this.setState({author: value})}
          />
          <Button
            onPress={() => alert('Add the book')}
            title="Add the book"
            color="#841584"
            style="Styles.button"
          />
          <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
            <TouchableOpacity
              style={[Styles.fullButton, Styles.greyButton]}
              onPress={() => this.props.navigation.navigate('Manual')}>
              <Text style={Styles.buttonText}>View recipes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
