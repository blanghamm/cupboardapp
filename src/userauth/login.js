import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, getUser} from '../store/actions/authActions';
import Styles from '../styles';
import * as yup from 'yup';
import {Formik} from 'formik';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {AsyncStorage} from '@react-native-community/async-storage';

const Login = ({login, navigation}) => {
  return (
    <View
      style={[
        Styles.centerElement,
        {flex: 1, flexDirection: 'column', justifyContent: 'space-between'},
      ]}>
      <View style={{paddingTop: '30%'}}>
        <Image
          style={Styles.largeIcon}
          source={require('../assets/icon.png')}
        />
      </View>
      <Formik
        enableReinitialize={true}
        initialValues={{email: '', password: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          await login(values);
          setSubmitting(false);

          navigation.navigate('Loadinglogin');
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
          password: yup
            .string()
            .min(6)
            .required('Password is required'),
        })}>
        {({
          values,
          isSubmitting,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <Fragment>
            <View style={[styles.textInputContainer, {paddingTop: 60}]}>
              <TextInput
                value={values.email}
                style={[styles.box1, styles.textInput, {height: 45}]}
                onChangeText={handleChange('email')}
                placeholder="Email"
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                value={values.password}
                style={[styles.box2, styles.textInput, {height: 45}]}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry={true}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 30,
                width: '100%',
                flex: 1,
              }}>
              <TouchableOpacity
                disabled={!isValid || isSubmitting}
                onPress={handleSubmit}
                style={[
                  Styles.fullButton,
                  Styles.greyButton,
                  {display: 'flex', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text style={Styles.buttonText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={[
                  Styles.fullButton,
                  Styles.reverseButton,
                  {display: 'flex', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text style={Styles.reverseButtonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </Formik>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    borderColor: 'grey',
    height: 40,
    marginTop: 10,
  },
  box1: {
    borderTopRightRadius: 400 / 2,
    borderBottomRightRadius: 400 / 2,
  },
  box2: {
    borderTopLeftRadius: 400 / 2,
    borderBottomLeftRadius: 400 / 2,
  },
});
