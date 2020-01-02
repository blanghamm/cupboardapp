import {
  LOGIN,
  SIGNUP,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../actions/authActions';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, login: action.payload};
    case SIGNUP:
      return {...state, signup: action.payload};
    case UPDATE_EMAIL:
      return {...state, email: action.payload};
    case UPDATE_PASSWORD:
      return {...state, password: action.payload};
    default:
      return state;
  }
};

export default user;
