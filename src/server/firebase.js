import firebase from 'firebase-admin';
import { runWith } from 'firebase-functions';
import rc from 'rc';

import server from './server';

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

firebase.initializeApp(firebaseConfig);

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '2GB',
};

export let myExpressApp = runWith(runtimeOpts).https.onRequest(server);
