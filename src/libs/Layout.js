import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Text,
  View,
} from 'react-native';

import { Bubble, Send } from 'react-native-gifted-chat';

const screen = {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
};

export default {
  homeContainer: {
    ...screen,
    backgroundColor: '#019DE6',
    paddingTop: Platform.OS === 'ios' ? 22 : 0,
  },
  channelsContainer: {
    ...screen,
    backgroundColor: '#50364D',
  },
  chatContainer: {
    ...screen,
    backgroundColor: '#FFFFFF',
  },
  navigationBar: {
    navigationBarStyle: {
      backgroundColor: '#422E41',
      borderBottomWidth: 0,
    },
    titleStyle: {
      color: '#826F81',
      fontSize: 13,
      fontWeight: '600',
      fontFamily: 'Lato-Semibold',
      marginTop: Platform.select({
        ios: 12,
        android: 14,
      }),
    },
  },
  textInput: {
    style: {
      height: 44,
      color: '#FFFFFF',
      fontSize: 22,
      marginLeft: Platform.select({
        ios: 15,
        android: 10,
      }),
      marginRight: 15,
      fontFamily: 'Lato-Semibold',
    },
    placeholderTextColor: '#71CBF9',
    clearButtonMode: 'while-editing',
    underlineColorAndroid: 'transparent',
  },
  channelName: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 15,
    fontFamily: 'Lato-Semibold',
  },





  GiftedChat: {
    renderBubble(props) {
      return (
        <View>
          {!props.isSameUser(props.currentMessage, props.previousMessage) ?
            <Text style={{
              color: '#b2b2b2',
              marginBottom: 3,
              fontSize: 12,
              textAlign: props.currentMessage.user._id === props.user._id ? 'right' : 'left',
              marginLeft: props.currentMessage.user._id === props.user._id ? 0 : 10,
              marginRight: props.currentMessage.user._id === props.user._id ? 10 : 0,
            }}>{props.currentMessage.user.name}</Text>
            :
            null
          }
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#50364D'
              }
            }}
          />
        </View>
      );
    },
    renderAvatar(props) {
      return (
        <Image
          source={{uri: `https://firebasestorage.googleapis.com/v0/b/slackrn-8aa2a.appspot.com/o/${props.currentMessage.user.avatar.replace('/', '%2F')}?alt=media`}}
          style={{
            height: 36,
            width: 36,
            borderRadius: 8,
          }}
        />
      );
    },
    renderLoading() {
      return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ActivityIndicator/>
        </View>
      )
    },
    renderSend(props) {
      return (
        <Send
          {...props}
          textStyle={{
            color: '#50364D',
          }}
        />
      );
    },
  },
};
