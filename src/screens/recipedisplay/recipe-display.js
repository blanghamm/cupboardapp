import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles';
import Colors from '../../styles/colors';
import {db} from '../../firebase/config';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;

const Recipedisplay = ({navigation, uid}) => {
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

  function Item({title}) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    cupboard: state.firestore.cupboard,
    uid: state.firebase.auth.uid,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderTopRightRadius: 400 / 2,
    borderBottomRightRadius: 400 / 2,
    marginTop: 10,
    width: screenWidthMargin,
  },
  title: {
    fontSize: 20,
    color: Colors.grey,
  },
});

export default connect(mapStateToProps)(Recipedisplay);
