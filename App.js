/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import screens from './src/screens/screens';
import * as NavigationService from './src/services/navigationService'
import configureStore from './src/store/configureStore';
const store = configureStore();
const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer ref={(nav) => { NavigationService.setNavigator(nav) }}>
          <Stack.Navigator
            initialRouteName="listScreen">
            {screens.map((item, index) => {
              return <Stack.Screen key={index} {...item} />
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
