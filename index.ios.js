import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { default as store } from './src/store';
import { default as Router } from './src/router.ios';

export default class App extends Component { // eslint-disable-line
  render() {
    return <Provider store={store}><Router /></Provider>;
  }
}

AppRegistry.registerComponent('App', () => App);
