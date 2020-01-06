/*
App: Cupboard
Page Type: Component
Page Name: App

Main component that contains the entire application. 
This is where the redux store is kept as it can be passed down through context to 
every component in the application.

It only renders the navstack from userauth which contains navigation that 
allows you to access all other screens.

Also contains persist properties that reload the state
and keeps the user logged in even when moving away from the application.


*/

import React, {Component} from 'react';
import NavStack from './src/userauth/navstack.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './src/firebase/config';
import {YellowBox} from 'react-native';

const {persistor, store} = configureStore();

YellowBox.ignoreWarnings(['Setting a timer']);
console.disableYellowBox = true;

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <NavStack />
          </ReactReduxFirebaseProvider>
        </PersistGate>
      </Provider>
    );
  }
}
