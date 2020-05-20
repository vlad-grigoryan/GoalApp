/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Home from '../pages/Home';
import Styles from './styles';
import store from '../redux/stores';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView className={Styles.topContainer}>
          <Home />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
