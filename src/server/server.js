import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import login from './login';
import logout from './logout';
import store from '../client/store/store';
import theme from '../client/web/theme';
import App from '../client/web/components/App/App';

import { template } from './server.utils';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || BUILD_SERVER_PORT;
const app = express();

app.use(cookieParser());

app.use(morgan('tiny'));

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
  res.send(template(helmet, app, css, req.cookies));
});

app.use('/login', login);
app.use('/logout', logout);

app.use(express.static('.'));

app.listen(PORT, () => console.log(`SERVER: Listening on port ${PORT}`));

export default app;
