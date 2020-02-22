import {
  AppRegistry, Platform,
} from 'react-native';

import { expo } from '../../app.json';

import App from './components/App/App';

AppRegistry.registerComponent(expo.name, () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(expo.name, { rootTag: document.getElementById('root') });
}
