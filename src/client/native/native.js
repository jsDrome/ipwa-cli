import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App/App';
import store from '../store/store';

const Main = () => <ReduxProvider store={store}>
  <App />
</ReduxProvider>

AppRegistry.registerComponent('main', () => Main);
if (Platform.OS === 'web') AppRegistry.runApplication('main', { rootTag: document.getElementById('root') });
