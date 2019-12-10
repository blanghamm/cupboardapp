import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../styles';

class Modaloptions extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={Styles.scrim}>
            <Icon
              style={Styles.scrimIcon}
              name="x"
              color="black"
              size={30}
              onPress={this.toggleModal}
            />
            <View style={(Styles.centerElement, {paddingBottom: 20})}>
              <Text style={Styles.scrimTitle}>Add a recipe</Text>
            </View>
            <View style={Styles.halfButtonBlock}>
              <TouchableOpacity
                style={[Styles.halfButton, Styles.greyButton]}
                onPress={this.toggleModal}>
                <Text style={Styles.buttonText}>View map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Styles.halfButton, Styles.peachButton]}
                onPress={this.toggleModal}>
                <Text style={Styles.buttonText}>Shopping List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
  },
});

export default Modaloptions;
