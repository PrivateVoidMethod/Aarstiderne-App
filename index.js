import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import 'es6-symbol/implement';

AppRegistry.registerComponent(appName, () => App);
