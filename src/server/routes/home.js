import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import theme from '../../client/web/theme';
import store from 'Store/store';
import App from 'Components/App/App';

import { template } from '../server.utils';

const router = express.Router();

router.get('/', (req, res) => {
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
  res.send(template(helmet, app, css, req.cookies));
});

export default router;
