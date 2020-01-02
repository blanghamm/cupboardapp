import firebase, {db} from '../../firebase/config';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

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
          name: newUser.displayName,
        };

        db.collection('users')
          .doc(response.user.uid)
          .collection('user data')
          .doc('basic')
          .set(user);

        db.collection('users')
          .doc(response.user.uid)
          .collection('user data')
          .doc('recipe')
          .set({Recipe: true});

        db.collection('users')
          .doc(response.user.uid)
          .collection('user data')
          .doc('items')
          .set({Tomato: true});

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
