import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Layout from '../libs/Layout';

export default class Channels extends React.Component {
  renderRow(channelName) {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.chat({
            channelName,
            title: '#'+channelName.toUpperCase(),
          });
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
