import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;

export default class cupboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>CUPBOARD PAGE</Text>
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
