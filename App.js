import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import NavStack from './src/userauth/navstack.js';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './src/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import thunk from 'redux-thunk';
import firebase from './src/firebase/config';
import {createFirestoreInstance, getFirestore} from 'redux-firestore';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase}))),
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <NavStack />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
