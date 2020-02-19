import { runWith } from 'firebase-functions';

import server from './server';

const runtimeOpts = {
  timeoutSeconds: 60,
  memory: '2GB',
};

export let myExpressApp = runWith(runtimeOpts).https.onRequest(server);
