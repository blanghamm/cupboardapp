import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from '../firebase/config';
import Styles from '../styles';
import Colors from '../styles/colors';
import Typography from '../styles/typography';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {addtitle} from '../store/actions/stockActions';
let titlePrint = '';

class Manualname extends Component {
// state = {
//   title: '',
// }

  addTitle = () => {
    this.props.addtitle(this.state);
    //console.log(this.state)
    // //console.log('Title: ' + this.state.title);
    // titlePrint = this.props.title.toString();
    //console.log('Title2: ' + titlePrint);
    // firebase
    //   .firestore()
    //   .collection('items')
    //   .doc(titlePrint)
    //   .set({title: titlePrint});
    //this.props.navigation.navigate('Manualingredients');
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
              onPress={() => this.props.navigation.navigate('Splash')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131420',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});

const mapStateToProps = state => ({
    content: state.content
});

// const mapDispatchToProps = dispatch =>{
//   return {
//     addtitle: content => dispatch(addtitle(content)),
//   }
// }


export default connect(mapStateToProps, {addtitle})(Manualname)

