import firebase from 'firebase-admin';
import md5 from 'md5';

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: BUILD_FIREBASE_API_KEY,
  authDomain: "jsdrome.firebaseapp.com",
  databaseURL: "https://jsdrome.firebaseio.com",
  storageBucket: "jsdrome.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const setEmailInFirebaseDB = email => {
  firebase.database().ref('users/' + md5(email)).set({
    email,
  });
};
