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
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          //id: (FROM DATABASE) ,
          title: 'Item 1',
          //thumbnail: '../assets/stock.png',
        },
        {
          title: 'Item 2',
        },
        {
          title: 'Item 3',
        },
        {
          title: 'Item 4',
        },
        {
          title: 'Item 5',
        },
      ],
    };
    console.log(screenWidthMargin);
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#faf',
        }}>
        <Text style={{color: '#000000'}}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.something}>
          <Carousel
            data={this.state.carouselItems}
            sliderWidth={screenWidthMargin}
            itemWidth={screenWidthMargin}
            renderItem={this._renderItem}
          />
        </View>
      </SafeAreaView>
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
  something: {
    height: 250,
  },
});
