import firebase from 'firebase-admin';
import { runWith } from 'firebase-functions';
import rc from 'rc';

import server from './server';

const config = rc('config');

const {
  firebase: {
    authDomain,
    databaseURL,
    storageBucket,
  },
} = config;

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: BUILD_FIREBASE_API_KEY,
  authDomain,
  databaseURL,
  storageBucket,
};

firebase.initializeApp(firebaseConfig);

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '2GB',
};

export const myExpressApp = runWith(runtimeOpts).https.onRequest(server);
