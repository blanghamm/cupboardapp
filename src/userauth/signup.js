/*
App: Cupboard
Page Type: Component
Page Name: Signup backup

Just a backup, not in use.


*/

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
import {signup} from '../store/actions/authActions';
import {bindActionCreators} from 'redux';
import {Formik} from 'formik';
import Styles from '../styles';
import * as yup from 'yup';

const SignUp = ({signup, navigation}) => {
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
        initialValues={{displayName: '', email: '', password: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          await signup(values);
          console.log(values);
          navigation.navigate('Loadinglogin');
          setSubmitting(false);
        }}
        validationSchema={yup.object().shape({
          displayName: yup
            .string()
            .required('Nickname is required.')
            .min(3, 'Too short')
            .max(25, 'Too long.'),
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
                value={values.displayName}
                style={[styles.box1, styles.textInput, {height: 45}]}
                autoCapitalize="words"
                onChangeText={handleChange('displayName')}
                placeholder="Name"
                onBlur={() => setFieldTouched('displayName')}
              />
              {touched.displayName && errors.displayName && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.displayName}
                </Text>
              )}
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                value={values.email}
                style={[styles.box2, styles.textInput, {height: 45}]}
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
                style={[styles.box1, styles.textInput, {height: 45}]}
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
                <Text style={Styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[
                  Styles.fullButton,
                  Styles.reverseButton,
                  {display: 'flex', flexDirection: 'row', alignItems: 'center'},
                ]}>
                <Text style={Styles.reverseButtonText}>
                  Already have an account? Log in
                </Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </Formik>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signup: newUser => dispatch(signup(newUser)),
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
