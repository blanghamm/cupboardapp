export const signIn = credentials => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
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
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().createUserWithEmailAndPassword(
      // newUser.name,
      newUser.email,
      newUser.password,
    );

    return firebase
      .collection()
      .doc('users/')
      .set({
        email: newUser.email,
      })
      .then(() => {
        dispatch({type: 'SIGNUP_SUCCESS'});
      })
      .catch(err => {
        dispatch({type: 'SIGNUP_ERROR', err});
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'});
      });
  };
};
