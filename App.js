/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import LoginPage from './src/Containers/LoginPage';
import HomePage from './src/Containers/HomePage';
import Header from './src/Components/Header';
import { createStackNavigator } from 'react-navigation';

const PublicScreens = createStackNavigator(
  {
    App: {
      screen: LoginPage,
    }
  },
  {
    headerMode: 'none',
});

const PriateScreens = createStackNavigator(
  {
    App: {
      screen: HomePage,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: <Header />
    })
  }
);

export default class App extends Component<Props> {
  state = {
    userLogged: true,
  }
  render() {
    return this.state.userLogged
    ? <PriateScreens />
    :<PublicScreens />;
  }
}
