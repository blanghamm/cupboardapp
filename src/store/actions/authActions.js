// export const signIn = credentials => {
//   return (dispatch, getState, {getFirebase}) => {
//     const firebase = getFirebase();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         dispatch({type: 'LOGIN_SUCCESS'});
//       })
//       .catch(err => {
//         dispatch({type: 'LOGIN_ERROR', err});
//       });
//   };
// };

// export const signUp = newUser => {
//   return (dispatch, getState, {getFirebase}) => {
//     const firebase = getFirebase();
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(
//         // newUser.name,
//         newUser.email,
//         newUser.password,
//       )

//       // return firebase
//       //   .collection()
//       //   .doc('users/')
//       //   .set({
//       //     email: newUser.email,
//       //   })
//       .then(() => {
//         dispatch({type: 'SIGNUP_SUCCESS'});
//       })
//       .catch(err => {
//         dispatch({type: 'SIGNUP_ERROR', err});
//       });
//   };
// };

// export const signOut = () => {
//   return (dispatch, getState, {getFirebase}) => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         dispatch({type: 'SIGNOUT_SUCCESS'});
//       });
//   };
// };

import firebase, {db} from '../../firebase/config';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

export const signup = newUser => {
  return async (dispatch, getState) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: newUser.email,
        };

        db.collection('users')
          .doc(response.user.uid)
          .set(user);

        dispatch({type: SIGNUP, payload: user});
      }
    } catch (e) {
      alert(e);
    }
  };
};

export const login = credentials => {
  return async (dispatch, getState) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);

      dispatch(getUser(response.user.uid));
    } catch (e) {
      alert(e);
    }
  };
};

export const getUser = uid => {
  return async (dispatch, getState) => {
    try {
      const user = await db
        .collection('users')
        .doc(uid)
        .get();

      dispatch({type: LOGIN, payload: user.data()});
    } catch (e) {
      alert(e);
    }
  };
};
