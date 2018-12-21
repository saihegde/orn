import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <LoginForm/>
      )
    }
    return (
      <View>
        <Home/>
      </View>
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
