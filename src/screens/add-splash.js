import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Splash extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={this.onPressButton}>
            <Icon
              style={{padding: 30}}
              name="arrow-left"
              color={Colors.black}
              size={30}
              onPress={() => this.props.navigation.navigate('Welcome')}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.standardBlock, {paddingTop: '30%'}]}>
          <Text style={[{paddingBottom: 30}, Styles.modalTitle]}>
            Add a recipe
          </Text>
          <View style={Styles.halfButtonBlock}>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.peachButton]}
              onPress={() => this.props.navigation.navigate('Camera')}>
              <Text style={Styles.buttonText}>Camera Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.greyButton]}
              onPress={() => this.props.navigation.navigate('Manualname')}>
              <Text style={Styles.buttonText}>Manual Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;
