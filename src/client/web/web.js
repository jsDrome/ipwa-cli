import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App/App';

import store from '../store/store';

const Main = () => <ReduxProvider store={store}>
  <App />
</ReduxProvider>

render(<Main />, document.getElementById('root'));
