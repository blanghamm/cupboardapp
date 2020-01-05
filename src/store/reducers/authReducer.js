import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  SIGNOUT_SUCCESS,
  AUTH_END,
  AUTH_START,
} from '../actions/authActions';
const initState = {
  authError: null,
  loading: false,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {...state, loading: true};

    case AUTH_END:
      return {...state, loading: false};

    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };

    case LOGIN_SUCCESS:
      return {...state, authError: false};

    case SIGNUP_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {...state, authError: false};

    case SIGNOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default user;
