/**
 * @format
 */

import {AppRegistry, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux';
import {Provider} from 'react-redux';

ScrollView.defaultProps = ScrollView.defaultProps || {};
ScrollView.defaultProps.showsVerticalScrollIndicator = false;
ScrollView.defaultProps.showHorizontalScrollIndicator = false;

FlatList.defaultProps = FlatList.defaultProps || {};
FlatList.defaultProps.showsVerticalScrollIndicator = false;
FlatList.defaultProps.showHorizontalScrollIndicator = false;

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.7;

const store = configureStore();

const ReduxProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
