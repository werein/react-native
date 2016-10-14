import React, { Component } from 'react';
import { AppRegistry, BackAndroid } from 'react-native';
import { default as Router } from './src/router.android';

const hardwareBackPress = () => {
  console.log('Back clidked');
};

export default class App extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', hardwareBackPress);
  }

  render() {
    return <Router />;
  }
}

AppRegistry.registerComponent('App', () => App);
