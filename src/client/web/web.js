import React from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App/App';
import Routes from './routes';

import store from '../store/store';

const Main = () => <ReduxProvider store={store}>
  <App>
    <Routes/>
  </App>
</ReduxProvider>

hydrate(<Main />, document.getElementById('root'));
