import authReducer from './authReducer';
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  stock: stockReducer,
});

export default rootReducer;
