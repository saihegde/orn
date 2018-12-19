import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import Home from './src/components/Home';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <LoginForm/>
      )
    }
    return (
      <Home/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
