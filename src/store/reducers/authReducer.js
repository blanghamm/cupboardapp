/*
App: Cupboard
Page Type: Reducer
Page Name: authReducer

This file imports action types from the 
authActions file and allows for them to update the
state of our app depending on which message is recieved

Redux allows for use to store the entire state of our app
in the top component so it can be used throughout our app.

This can either be through action creators which pass functions or
to simply pass the state to a component. Such as displaying a user
profile on each page. It would have been passed down through the redux store.



*/

import {
  LOGIN,
  SIGNUP,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  SIGNOUT_SUCCESS,
} from '../actions/authActions';
const initState = {
  authError: null,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        loginfailure: action.payload,
        authError: 'Login_Failed',
      };
    case LOGIN:
      return {...state, login: action.payload};
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupfailure: action.payload,
        authError: 'Signup Failed',
      };
    case SIGNUP:
      return {...state, signup: action.payload};
    case SIGNOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default user;
