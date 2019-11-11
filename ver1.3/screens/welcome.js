import React, { Component } from 'react';
import { StyleSheet, Platform, Image, View, Text } from 'react-native';
import { Carousel } from 'react-native-snap-carousel';
//import { StyleSheet, Platform, Image, Text, View } from 'react-native';


export class MyCarousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: [
        {
          title: 'Item 1'
        },
        {
          title: 'Item 2'
        },
      ]
      }
    };

  _renderItem ({item, index}) {
      return (
          <View style={{flex:1,justifyContent:'center',}}>
              <Text style={styles.title}>{ item.title }</Text>
          </View>

      );
  }

  render () {
      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
      );
  };
};

export default class Welcome extends Component {
  state = { currentUser: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
        Hi { currentUser && currentUser.email }!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
