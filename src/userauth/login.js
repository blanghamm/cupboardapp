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
    <View style={[Styles.standardBlock, Styles.centerElement]}>
      <Image
        style={Styles.largeIcon}
        source={require('../assets/icon.png')}></Image>
      <Formik
        enableReinitialize={true}
        initialValues={{email: '', password: ''}}
        onSubmit={async (values, {setSubmitting}) => {
          await login(values);
          setSubmitting(false);

          navigation.navigate('Loading');
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
              title="Login"
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('Signup')}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
