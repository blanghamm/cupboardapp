import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles';
import Colors from '../../styles/colors';

class Recipedisplay extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={this.onPressButton}>
            <Icon
              style={{padding: 30}}
              name="arrow-left"
              color={Colors.black}
              size={30}
              onPress={() => this.props.navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.standardPadding, {paddingBottom: 30}]}>
          <Text style={Styles.title}>Your Recipes</Text>
          <Text style={Styles.subTitle}>Ingredients</Text>
          <Text style={Styles.subTitle}>Method</Text>
        </View>
      </View>
    );
  }
}

export default Recipedisplay;
