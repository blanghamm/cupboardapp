import React, { Component } from 'react';
import { View, Text } from 'react-native';


export class MyCarousel extends Component {

  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
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
  }
}

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> welcome </Text>
      </View>
    );
  }
}


