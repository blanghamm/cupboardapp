import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class camera extends Component {
  state = {
    textInputs: [],
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          style={{ flex: 1 }}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 40,
                  backgroundColor: '#F0F0F0',
                  width: 300,
                  alignSelf: 'center',
                  margin: 10,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    backgroundColor: '#C0C0C0',
                  }}
                  onChangeText={text => {
                    let { textInputs } = this.state;
                    textInputs[index] = text;
                    this.setState({
                      textInputs,
                    });
                  }}
                  value={this.state.textInputs[index]}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    let { textInputs } = this.state;
                    textInputs[index] = '';
                    this.setState({
                      textInputs,
                    });
                  }}
                >
                  
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
