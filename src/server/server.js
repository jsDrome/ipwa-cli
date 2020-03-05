import express from 'express';
import rc from 'rc';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import login from './login';
import store from '../client/store/store';
import theme from '../client/web/theme';
import App from '../client/web/components/App/App';
import { template } from './server.utils';

const config = rc('config');
const { build: { server: { port } } } = config;
const PORT = process.env.PORT || port;
const app = express();

app.get('/', (req, res) => {
  const sheets = new ServerStyleSheets();
  const app = ReactDOMServer.renderToString(
    sheets.collect(
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    )
  );
  const css = sheets.toString();
  const helmet = Helmet.renderStatic();
  res.send(template(helmet, app, css));
});

app.use('/login', login);

app.use(express.static('.'));

app.listen(port, () => console.log(`SERVER: Listening on port ${PORT}`));

export default app;
