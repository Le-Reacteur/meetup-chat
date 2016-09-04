import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Layout from '../libs/Layout';
import Backend from '../libs/Backend';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {
    Backend.loadMessages(this.props.channelName, (message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  render() {
    return (
      <View style={Layout.chatContainer}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => {
            Backend.sendMessages(messages);
          }}
          user={{
            _id: Backend.getUid(),
            name: Backend.getName(),
            avatar: Backend.getAvatar(),
          }}
          {...Layout.GiftedChat}
        />
      </View>
    );
  }
}
