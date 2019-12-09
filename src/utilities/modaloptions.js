import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

class Modaloptions extends Component {
  state = {
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.content}>
            <Icon
              style={styles.Icon}
              name="x"
              color="black"
              size={30}
              onPress={this.toggleModal}
            />
            <Text style={styles.contentTitle}>Add a Recipe!</Text>
            <TouchableOpacity
              style={styles.modalmain}
              onPress={this.toggleModal}>
              <Text style={styles.buttonleft}>Add Manually</Text>
              <Text style={styles.buttonright}>Take a Photo</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    margin: 30,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 30,
    fontFamily: 'SourceSansPro-Bold',
  },
  buttonleft: {
    backgroundColor: '#6F7073',
    fontFamily: 'SourceSansPro-Bold',
    color: 'white',
    fontSize: 20,
    padding: 5,
    margin: 10,
    width: '50%',
    textAlign: 'center',
    borderRadius: 8,
  },
  buttonright: {
    backgroundColor: '#F3AD9F',
    fontFamily: 'SourceSansPro-Bold',
    color: 'white',
    fontSize: 20,
    padding: 5,
    margin: 10,
    width: '50%',
    textAlign: 'center',
    borderRadius: 8,
  },
  modalmain: {
    flexDirection: 'row',
  },
  Icon: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});

export default Modaloptions;
