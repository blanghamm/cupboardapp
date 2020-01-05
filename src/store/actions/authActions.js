// import firebase, {db} from '../../firebase/config';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const AUTH_START = 'AUTH_START';
export const AUTH_END = 'AUTH_END';

export const signup = newUser => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({type: AUTH_START});
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(response => {
          dispatch({type: SIGNUP_SUCCESS});
          firestore
            .collection('users')
            .doc(response.user.uid)
            .set({
              Name: newUser.displayName,
              Email: newUser.email,
              uid: response.user.uid,
            });
        });
    } catch (err) {
      dispatch({type: SIGNUP_FAILURE, payload: err.message});
    }
    dispatch({type: AUTH_END});
  };
};

export const login = data => {
  return async (dispatch, getState, {getFirebase}) => {
    // const firestore = getFirestore();
    const firebase = getFirebase();
    dispatch({type: AUTH_START});
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      dispatch({type: LOGIN_SUCCESS});
    } catch (err) {
      dispatch({type: LOGIN_FAILURE, payload: err.message});
    }
    dispatch({type: AUTH_END});
  };
};

export const signout = data => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: SIGNOUT_SUCCESS});
      });
  };
};
