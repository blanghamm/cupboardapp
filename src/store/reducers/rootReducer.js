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
