import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import Layout from '../libs/Layout';

import {Actions} from 'react-native-router-flux';


export default class Channels extends React.Component {
  renderChannel(channelName) {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.chat({
            channelName: channelName,
            title: '#'+channelName,
          });
        }}
      >
        <Text style={{
          color: '#FFFFFF',
          marginTop: 20,
          marginLeft: 15,
          fontSize: 19,
        }}>
          #{channelName}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <ScrollView style={Layout.channelsContainer}>
        {this.renderChannel('react')}
        {this.renderChannel('react-native')}
      </ScrollView>
    );
  }
}
