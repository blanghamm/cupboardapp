import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  databaseURL: 'https://testapp-22b3d.firebaseio.com',
  projectId: 'testapp-22b3d',
  storage_bucket: 'testapp-22b3d.appspot.com',
  project_number: '912571383608',
  apiKey: 'AIzaSyAexSkizKAKFS0cm_ZWuH9Vz_8FN2srN60',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
