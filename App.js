/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Home from './src/screens/Home'

const App = () => {
  return (
    <View style={styles.viewStyle}>
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle : {
    flex:1,
    backgroundColor:'yellow'
  }
});

export default App;
