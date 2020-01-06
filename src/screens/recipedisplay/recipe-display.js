import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles';
import Colors from '../../styles/colors';
import {db} from '../../firebase/config';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';

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

export default connect(mapStateToProps)(Recipedisplay);
