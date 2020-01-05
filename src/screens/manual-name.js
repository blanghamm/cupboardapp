import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import firebase, {db} from '../firebase/config';
import Styles from '../styles';
import Colors from '../styles/colors';
import Typography from '../styles/typography';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

class Manualname extends Component {
  state = {
    title: '',
  };

  addTitle = () => {
    var uid = this.props.uid;
    var titlePrint = this.state.title;
    db.collection('users')
      .doc(uid)
      .collection('recipes')
      .get()
      .then(function(querySnapshot) {
        console.log('size: ' + querySnapshot.size);
        var recipeAmount = querySnapshot.size;
        var recipeAmount = recipeAmount + 1;
        var docName = recipeAmount.toString();
        db.collection('users')
          .doc(uid)
          .collection('recipes')
          .doc(docName)
          .set({title: titlePrint});
      });

    this.props.navigation.navigate('Manualingredients');
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
        <View style={Styles.bigBottomButton}>
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
  uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps)(Manualname);
