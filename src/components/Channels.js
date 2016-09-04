import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Layout from '../libs/Layout';
import { Actions } from 'react-native-router-flux';

export default class Channels extends React.Component {
  renderRow(channelName) {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.chat({
            channelName: channelName,
            title: '#'+channelName.toUpperCase(),
          })
        }}
        style={{
          marginTop: 15,
        }}
      >
        <Text style={Layout.channelName}>
          # {channelName}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <ScrollView style={Layout.channelsContainer}>
        {this.renderRow('react')}
        {this.renderRow('react-native')}
      </ScrollView>
    );
  }
}
