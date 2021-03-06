/*
App: Cupboard
Page Type: Config
Page Name: Config

Config for all the properites passed in app.js, allows redux to 
access async storage and keep the state stored so when coming back 
to the application the user would still be logged in.


*/

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './src/store/reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getFirebase} from 'react-redux-firebase';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(
  thunk.withExtraArgument({getFirebase, getFirestore}),
);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(middleware, reduxFirestore(firebase)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
