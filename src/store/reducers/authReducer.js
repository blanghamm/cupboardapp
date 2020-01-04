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
