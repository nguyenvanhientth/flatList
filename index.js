/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import BasicFlatList from './component/BasicFlatlist' 
import {name as appName} from './app.json';
import FlatListItem from './component/FlatListItem';

AppRegistry.registerComponent(appName, () => FlatListItem);
