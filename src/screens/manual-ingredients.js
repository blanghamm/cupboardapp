import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import Ingredientsform from '../components/ingredients-form';

let addItem = item => {
  firebase
    .database()
    .ref('/items')
    .push({
      name: item,
    });
  console.log(item);
};

export default class Manualingredients extends Component {
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
      <ScrollView>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={this.onPressButton}>
            <Icon
              style={{padding: 30}}
              name="arrow-left"
              color={Colors.black}
              size={30}
              onPress={() => this.props.navigation.navigate('Splash')}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.standardPadding, {paddingBottom: 30}]}>
          <Text style={Styles.title}>Add Ingredients</Text>
          <Text style={Styles.subTitle}>
            Add the ingredients and their quantities to your recipe.
          </Text>
        </View>
        <Ingredientsform />
      </ScrollView>
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
