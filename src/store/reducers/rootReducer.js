import user from './authReducer';
import {combineReducers} from 'redux';
// import {firebaseReducer} from 'react-redux-firebase';
import stockReducer from './stockReducer';

const rootReducer = combineReducers({
  auth: user,
  //firebase: firebaseReducer,
  stock: stockReducer,
});

export default rootReducer;
