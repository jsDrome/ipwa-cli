import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App/App';
import store from './data/store';

const Main = () => <ReduxProvider store={store}>
  <App />
</ReduxProvider>

AppRegistry.registerComponent('main', () => Main);
AppRegistry.runApplication('main', { rootTag: document.getElementById('root') });
