import React, {Component} from 'react';
import {View} from 'react-native';
import Navigation from '../navigation';
import {connect} from 'react-redux';

class Main extends Component {
  render() {
    return (
      <View>
        <Navigation />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Main);
