import { AppRegistry } from 'react-native';

import App from './components/App/App';

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', { rootTag: document.getElementById('root') });
