import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import SideSwipe from 'react-native-sideswipe';
import {connect} from 'react-redux';
import {signOut} from '../store/actions/authActions';
import Styles from '../styles';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 90;

// class Welcome extends React.Component {

class Welcome extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          //id: (FROM DATABASE) ,
          title: 'Item 1',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 2',
        },
        {
          title: 'Item 3',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#faf',
          marginLeft: 0,
          height: 200,
        }}>
        <Image style={{width: screenWidthMargin}} source={item.thumbnail} />
        <Text style={{color: '#000000'}}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={[Styles.standardBlock, Styles.centerElement]}>
          <Image
            style={Styles.largeIcon}
            source={require('../assets/icon.png')}
          />
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.welcomeTextGrey}>hello,</Text>
          <Text style={Styles.welcomeTextBlack}>Username</Text>
        </View>
        <View style={Styles.wideBlock}>
          <View style={Styles.bannerBlock}>
            <View style={{width: '70%'}}>
              <Text style={(Styles.bodyText, {fontSize: 24})}>
                You’re nearly stocked up msg//
              </Text>
            </View>
            <View style={{width: '30%'}}>
              <Text style={(Styles.bodyText, {fontSize: 24})}>graph// </Text>
            </View>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Ready to shop?</Text>
          <Text style={Styles.bodyText}>Your nearest shop is //DATA//</Text>
          <View style={Styles.halfButtonBlock}>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.greyButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.halfButton, Styles.peachButton]}
              onPress={this.onPress}>
              <Text style={Styles.buttonText}>View map</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Your Recipes</Text>
        </View>
        <SafeAreaView style={{backgroundColor: 'lightblue', height: 200}}>
          <Carousel
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={screenWidthMargin}
            layout={'default'}
            renderItem={this._renderItem}
          />
        </SafeAreaView>
        <View style={Styles.standardBlock}>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={this.onPress}>
            <Text style={Styles.buttonText}>View map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Welcome);
