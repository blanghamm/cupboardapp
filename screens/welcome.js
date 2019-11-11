import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Carousel } from 'react-native-snap-carousel';


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

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}


