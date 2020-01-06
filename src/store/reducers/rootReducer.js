/*
App: Cupboard
Page Type: Reducer
Page Name: Root Reducer

Combines each reducer to be added to our store. This allows us
to view the state of each reducer from anywhere in our app.


*/

import user from './authReducer';
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({
  auth: user,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
