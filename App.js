import React, {Component} from 'react';
import NavStack from './src/userauth/navstack.js';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './src/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import firebase from './src/firebase/config';
import {createFirestoreInstance} from 'redux-firestore';
import 'firebase/auth';
import 'firebase/firestore';

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
        <ReactReduxFirebaseProvider
          {...rrfProps}
          firebase={firebase}
          createFirestoreInstance={createFirestoreInstance}>
          <NavStack />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
