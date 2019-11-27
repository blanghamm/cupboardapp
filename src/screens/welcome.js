import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {Carousel} from 'react-native-snap-carousel';
import firebase from '../firebase/config';

export default class welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Image style={styles.PngColor} source={require('../assets/icon.png')} />
        {/* <Text style={styles.text}>Hello, Ben</Text> */}
      </View>
    );
  }
}

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
