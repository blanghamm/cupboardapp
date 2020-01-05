import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Recipecarousel from '../components/recipe-carousel';
import {connect} from 'react-redux';
import Styles from '../styles';
import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import ItemCategoryBox from '../components/item-category-box';

const Cupboard = ({navigation, profile, signout}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 30,
          paddingTop: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('settings cog pressed');
          }}>
          <Icon style={{}} name="settings" color={Colors.black} size={30} />
        </TouchableOpacity>
      </View>
      <View style={Styles.centerElement}>
        <Image
          source={require('../assets/user.png')}
          style={{width: 110, height: 110, borderRadius: 400 / 2}}
        />
        <Text style={[Styles.titleLower, {paddingTop: 10}]}>My Cupboard</Text>
        <Text style={Styles.subTitle}>{profile.Name}</Text>
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.cupboardTitle}>INGREDIENTS</Text>
        <ItemCategoryBox />
        <View style={Styles.halfButtonBlock}>
          <TouchableOpacity style={[Styles.halfButton, Styles.greyButton]}>
            <Text style={Styles.buttonText}>View map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.halfButton, Styles.peachButton]}>
            <Text style={Styles.buttonText}>Shopping List</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.standardBlock}>
        <Text style={Styles.bodyTitle}>Recipes</Text>
      </View>
      <Recipecarousel />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {signout: () => dispatch(signout())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cupboard);
