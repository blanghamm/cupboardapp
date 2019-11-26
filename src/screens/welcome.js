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

// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    //   uid = user.uid;
    // }
    // console.log(user.displayName);
    // console.log(user.uid);
  }

  render() {
    const {displayName} = this.state;

    return (
      <View style={styles.container}>
        <Text>{displayName}</Text>
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
