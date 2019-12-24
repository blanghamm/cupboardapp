import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../styles';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;

export default class Recipecarousel extends React.Component {
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
    return (
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
    );
  }
}
