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
          .collection('cupboard')
          .doc('apple')
          .set({catergory: 'fruit'});

        db.collection('users')
          .doc(response.user.uid)
          .collection('recipes')
          .doc('spag bol')
          .set({ingredients: 'bacon'});
        dispatch({type: SIGNUP, payload: user});
      }
    } catch (e) {
      alert(e);
    }
  };
};

export const login = data => {
  return async (dispatch, getState) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (response.user.uid) {
        const user = await db
          .collection('users')
          .doc(response.user.uid)
          .get();

        dispatch({type: LOGIN});
      }
    } catch (e) {
      alert(e);
    }
  };
};

// export const getUser = uid => {
//   return async (dispatch, getState) => {
//     try {
//       const user = await db
//         .collection('users')
//         .doc(uid)
//         .get();

//       dispatch({type: LOGIN, payload: user.data()});
//     } catch (e) {
//       alert(e);
//     }
//   };
// };
