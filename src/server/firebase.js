import * as functions from 'firebase-functions';

import app from './server';

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '2GB',
};

export let myExpressApp = functions.runWith(runtimeOpts).https.onRequest(app);
