import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Colors from '../styles/colors';
import Typography from '../styles/typography';
import Icon from 'react-native-vector-icons/Feather';

class Manualname extends Component {
  state = {
    title: '',
  };

  addTitle = () => {
    let titlePrint = this.state.title;
    this.props.navigation.navigate('Manualingredients', {
      title: this.state.title,
    });
  };

  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={this.onPressButton}>
            <Icon
              style={{padding: 30}}
              name="arrow-left"
              color={Colors.black}
              size={30}
              onPress={() => this.props.navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.standardPadding, {paddingBottom: 30}]}>
          <Text style={Styles.title}>Your recipe title</Text>
          <Text style={Styles.subTitle}>
            Please chose a title for your recipe.
          </Text>
        </View>
        <TextInput
          placeholder="Enter your recipe title"
          style={{
            fontSize: 20,
            minWidth: 200,
            paddingHorizontal: 30,
            fontFamily: Typography.bodyRegular,
          }}
          onChangeText={value => this.setState({title: value})}
          onSubmitEditing={this.addTitle}
        />
        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            width: '100%',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={[
              Styles.fullButton,
              Styles.greyButton,
              {display: 'flex', flexDirection: 'row', alignItems: 'center'},
            ]}
            onPress={this.addTitle}>
            <Text style={Styles.buttonText}>Add ingredients</Text>
            <Text
              style={[
                Styles.bodyText,
                {color: Colors.white, fontSize: 12, paddingLeft: 5},
              ]}>
              (1/3)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default Manualname;
