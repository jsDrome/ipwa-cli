import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../client/store/store';
import App from '../client/web/components/App/App';
import { template } from './server.utils';

import rc from 'rc';

const config = rc('config');
const port = process.env.PORT || config.build.server.port;
const app = express();

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
  const helmet = Helmet.renderStatic();
  res.send(template(helmet, app));
});

app.use(express.static('.'));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));

export default app;
