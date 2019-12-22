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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;

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
          title: 'Spag Bol',
          category: 'Italian',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 2',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 3',
          thumbnail: require('../assets/stock.png'),
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          justifyContent: 'center',
          margin: 0,
          marginRight: 20,
        }}>
        <Image style={Styles.caraThumb} source={item.thumbnail} />
        <Text style={Styles.caraTitle}>{item.title}</Text>
        <Text style={Styles.caraSubTitle}>{item.category}</Text>
      </View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
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
              <Text style={Styles.buttonText}>Shopping List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.standardBlock}>
          <Text style={Styles.bodyTitle}>Your Recipes</Text>
        </View>
        <SafeAreaView style={{paddingTop: 20}}>
          <Carousel
            data={this.state.carouselItems}
            sliderWidth={viewportWidth}
            itemWidth={screenWidthMargin}
            layout={'default'}
            inactiveSlideScale={1}
            renderItem={this._renderItem}
          />
        </SafeAreaView>
        <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
          <TouchableOpacity
            style={[Styles.fullButton, Styles.greyButton]}
            onPress={() => this.props.navigation.navigate('Modal')}>
            <Text style={Styles.buttonText}>View recipes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// _goToManual = () => {
//   this.props.navigation.navigate('Manual');
// };

// const AppStack = createStackNavigator({Manual: Manual});

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Welcome);
