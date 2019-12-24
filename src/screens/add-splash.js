import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles';

class Splash extends Component {
  render() {
    return (
      <View style={[Styles.standardBlock, Styles.centerElement]}>
        <TouchableOpacity
          style={[Styles.halfButton, Styles.greyButton]}
          onPress={() => this.props.navigation.navigate('camera')}>
          <Text style={Styles.buttonText}>Camera Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.halfButton, Styles.greyButton]}
          onPress={() => this.props.navigation.navigate('manual')}>
          <Text style={Styles.buttonText}>Manual Upload</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Splash;
