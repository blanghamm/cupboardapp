import firebase from 'firebase';
import 'firebase/firestore';

console.log(typeof firebase.firestore);

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({type: 'LOGIN_SUCCESS'});
      })
      .catch(err => {
        dispatch({type: 'LOGIN_ERROR', err});
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      // console
      //   .log(firebase.createUserWithEmailAndPassword)

      // return firestore
      //   .collection('users')
      //   .doc(user.uid)
      //   .set({
      //     email: newUser.email,
      //   })
      .then(() => {
        dispatch({type: 'SIGNUP_SUCCESS'});
      })
      .catch(err => {
        dispatch({type: 'SIGNUP_ERROR', err});
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'});
      });
  };
};
