import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button } from 'react-native';

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <Image
          style={{width: 50, height: 50}} 
          source={require('../assets/logo block.png')}/>  
        <Text style={styles.text}>Hello, Ben</Text>
        <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-around', }}/>
          <Button title='View Map' style={{ width: 50, height: 50 }}/>
          <Button title='Shopping List'/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 42,
    paddingLeft: 50,
    paddingTop: 20
  },
});


