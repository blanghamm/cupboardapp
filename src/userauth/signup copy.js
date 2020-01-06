/*
App: Cupboard
Page Type: Component
Page Name: Sign up

Similar to login, contains a form that allows the user to signup
then dispatches an action creator function from the redux store
and signs the user up for an account. Then navigates to the
loading-login screen to check if firebase is initialised and moves 
to the welcome screen if it has. 

Also contains a form with validation and will only accept correct characters and
correctly formatted email addresses.


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
    <View style={[Styles.standardBlock, Styles.centerElement]}>
      <Image
        style={Styles.largeIcon}
        source={require('../assets/icon.png')}></Image>
      <Formik
        enableReinitialize={true}
        initialValues={{displayName: '', email: '', password: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          await signup(values);
          console.log(values);
          navigation.navigate('Welcome');
          setSubmitting(false);
        }}
        validationSchema={yup.object().shape({
          displayName: yup
            .string()
            .required('Nickname is required.')
            .min(3, 'Too short')
            .max(10, 'Too long.'),
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
            <TextInput
              value={values.displayName}
              style={styles.textInput}
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
            <TextInput
              value={values.email}
              style={styles.textInput}
              onChangeText={handleChange('email')}
              placeholder="Email"
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              style={styles.textInput}
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
            <Button
              title="Sign Up"
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            />
            <Button
              title="Already have an account? Login"
              onPress={() => navigation.navigate('Login')}
            />
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
