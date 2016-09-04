import React from 'react';
import {
  View,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../libs/Backend';
import Store from '../libs/Store';
import Layout from '../libs/Layout';

export default class Chat extends React.Component {
  state = {
    messages: []
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
  componentWillUnmount() {
    Backend.closeChat();
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
            _id: Store.getUid(),
            name: Store.getName(),
            avatar: Store.getAvatar(),
          }}
          {...Layout.GiftedChat}
        />
      </View>
    );
  }
}
