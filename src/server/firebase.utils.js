import firebase from 'firebase-admin';
import md5 from 'md5';
import rc from 'rc';

const config = rc('config');

const {
  firebase: {
    authDomain: firebaseAuthDomain,
    databaseUrl: firebaseDataUrl,
    storageBucket: firebaseStorageBucket,
  },
} = config;

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: BUILD_FIREBASE_API_KEY,
  authDomain: firebaseAuthDomain,
  databaseURL: firebaseDataUrl,
  storageBucket: firebaseStorageBucket,
};

export const setEmailInFirebaseDB = email => {
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('users/' + md5(email)).set({
    email,
  });
};
