import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { headerView, headerText } = styles;
    return (
      <SafeAreaView style={{backgroundColor: '#ff3333'}}>
        <View style={headerView}>
          <Text style={headerText}>{this.props.headerText}</Text>
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
