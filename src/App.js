import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class MeetupChat extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        }}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
