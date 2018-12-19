import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import JobList from './JobList';

export default class Home extends React.Component {
  render() {
    const { headerView, headerText } = styles;
    return (
      <SafeAreaView>
        <View>
          <Header backgroundColor='#ff3333'
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'ORN', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}/>
          <JobList/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    paddingTop: 10,
    backgroundColor: '#ff3333',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  }
});
