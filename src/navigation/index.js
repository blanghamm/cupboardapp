import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Welcome from '../screens/welcome.js';
import Modaloptions from '../utilities/modaloptions.js';
import Cupboard from '../screens/cupboard.js';
import Styles from '../styles';
import Colors from '../styles/colors';
import Typography from '../styles/typography';

const Screens = createBottomTabNavigator(
  {
    Welcome,
    Modaloptions,
    Cupboard,

    Welcome: {
      screen: Welcome,
      navigationOptions: {
        tabBarLabel: 'WELCOME',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="home"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
    Modaloptions: {
      screen: Modaloptions,
      navigationOptions: {
        tabBarLabel: 'CAMERA',
        tabBarOnPress: ({navigation}) => {
          console.log('Clicked');
          Alert.alert(
            'Add a recipe',
            '',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel clicked'),
                style: 'cancel',
              },
              {
                text: 'Manual',
                onPress: () => alertPress(),
              },
              {
                text: 'Camera',
                onPress: () => console.log('Camera Pressed'),
                style: 'positive',
              },
            ],
            {cancelable: true},
          );
          // recipeModal();
        },
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="camera"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
    Cupboard: {
      screen: Cupboard,
      navigationOptions: {
        tabBarLabel: 'CUPBOARD',
        tabBarIcon: ({tintColor}) => (
          <Icon
            style={{marginBottom: 20}}
            name="coffee"
            color={tintColor}
            size={30}
          />
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      navigationOptions: {
        tabStyle: {
          marginTop: 20,
        },
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
    },
    tabBarOptions: {
      height: 20,
      showLabel: false,
      tintColor: '#2e4057',
      activeTintColor: '#e08dac',
      tabStyle: {
        paddingBottom: 10,
        paddingVertical: 30,
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 10},
        shadowColor: 'black',
      },
    },
  },
);

const Modal = () => {
  return (
    <Modal>
      <View style={styles.container}>
        <View style={Styles.scrim}>
          <Icon style={Styles.scrimIcon} name="x" color="black" size={30} />
          <View style={(Styles.centerElement, {paddingBottom: 20})}>
            <Text style={Styles.scrimTitle}>Add a recipe</Text>
          </View>
          <View style={Styles.halfButtonBlock}>
            <TouchableOpacity style={[Styles.halfButton, Styles.greyButton]}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.halfButton, Styles.peachButton]}>
              <Text style={Styles.buttonText}>Shopping List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const rootNavigator = createStackNavigator(
  {
    Screens: {screen: Screens},
    Modal: {screen: Modal},
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const Navigation = createAppContainer(rootNavigator);

export default Navigation;
