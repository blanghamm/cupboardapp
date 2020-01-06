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
import {useState, useEffect} from 'react';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;
var fireInfo;
var fireInfoIng = '';
var fireInfoTitle;

const Recipecarousel = ({navigation, uid}) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    listenForRecipes();
  }, []);

  const listenForRecipes = () => {
    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .onSnapshot(
        snapshot => {
          const allRecipes = [];
          snapshot.forEach(doc => allRecipes.push(doc.data()));
          setRecipes(allRecipes);
          console.log(allRecipes);
        },
        error => console.error(error),
      );
  };

  // _renderItem({item, index}) {
  //   return (
  //     <View
  //       style={{
  //         justifyContent: 'center',
  //         margin: 0,
  //         marginRight: 20,
  //       }}>
  //       <Image style={Styles.caraThumb} source={item.thumbnail} />
  //       <Text style={Styles.caraTitle}>{item.title}</Text>
  //       <Text style={Styles.caraSubTitle}>{item.category}</Text>
  //     </View>
  //   );
  // }
  function Item({title}) {
    return (
      <View style={{paddingRight: 20}}>
        <Image
          style={Styles.caraThumb}
          source={require('../assets/recipe-illustation.png')}
        />
        <Text style={Styles.caraTitle}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{paddingTop: 20}}>
      <Carousel
        data={recipes}
        sliderWidth={viewportWidth}
        itemWidth={screenWidthMargin}
        layout={'default'}
        inactiveSlideScale={1}
        renderItem={({item}) => <Item title={item.title} />}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default connect(mapStateToProps)(Recipecarousel);
