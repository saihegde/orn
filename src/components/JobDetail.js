import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Card, Divider } from 'react-native-elements'

export default class JobDetail extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true };
  }

  componentWillMount(){
    this.setState({isLoading: false});
  }

  render() {
    const { } = styles;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <Card title={this.props.job.title}>
        <Divider style={{ backgroundColor: '#fff' }} />
        <Text>{this.props.job.desiredStartTime}</Text>
        <Divider style={{ backgroundColor: '#fff' }} />
        <Text>{this.props.job.description}</Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({

});
