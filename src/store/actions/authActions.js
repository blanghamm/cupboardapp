import firebase, {db} from '../../firebase/config';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

export const signup = newUser => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            Name: newUser.displayName,
            Email: newUser.email,
            uid: response.user.uid,
          });
      })
      .then(() => {
        dispatch({type: SIGNUP});
      })
      .catch(err => {
        dispatch({type: SIGNUP_FAILURE, err});
      });
  };
};

export const login = data => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        dispatch({type: LOGIN});
      })
      .catch(err => {
        dispatch({type: LOGIN_FAILURE, err});
      });
  };
};

export const signout = data => {
  return async (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: SIGNOUT_SUCCESS});
      });
  };
};
