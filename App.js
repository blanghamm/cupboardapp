import React, {Component} from 'react';
import NavStack from './src/userauth/navstack.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './src/firebase/config';
import Loading from './src/userauth/loading';
import {YellowBox} from 'react-native';

const {persistor, store} = configureStore();

YellowBox.ignoreWarnings(['Setting a timer']);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
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
