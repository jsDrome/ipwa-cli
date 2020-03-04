import React, { useEffect } from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import App from 'Components/App/App';
import Routes from './routes';
import store from '../store/store';
import theme from './theme';

const Main = () => {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App>
          <Routes />
        </App>
      </ThemeProvider>
    </ReduxProvider>
  );
}

hydrate(<Main />, document.getElementById('root'));
