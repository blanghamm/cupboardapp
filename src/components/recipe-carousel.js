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
import {db} from '../firebase/config';
import {connect} from 'react-redux';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;
var fireInfo;
var fireInfoIng = '';
var fireInfoTitle;

class Recipecarousel extends React.Component {
  componentDidMount() {
    var uid = this.props.uid;
    var docRef = db
      .collection('users')
      .doc(uid)
      .collection('recipes')
      .doc('bacon bap'); //Needs to be set as document count number
    //then ingredients collection, follow by document ingredient
    var item1 = docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          fireInfo = doc.data();
          fireInfoIng = fireInfo.ingredient;
          fireInfoTitle = fireInfo.title;
        } else {
          console.log('No Document');
        }
      })
      .then(() => {
        this.setState({
          carouselItems: [
            {
              //id: (FROM DATABASE) ,
              title: fireInfoIng,
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
        });
      })
      .catch(function(error) {
        console.log('Error');
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [],
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
const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps)(Recipecarousel);
