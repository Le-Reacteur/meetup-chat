import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Layout from '../libs/Layout';
import Store from '../libs/Store';

export default class Home extends React.Component {
  state = {
    name: '',
  };

  render() {
    return (
      <View style={Layout.homeContainer}>
        <Text
          style={{
            marginTop: 60,
            color: '#FFFFFF',
            fontSize: 16,
            marginLeft: 15,
            fontFamily: 'Lato-Semibold',
          }}
        >
          Enter your name :
        </Text>

        <TextInput
          placeholder='Awesome developer'
          value={this.state.name}
          onChangeText={(name) => {
            this.setState({name});
          }}
          {...Layout.textInput}
        />

        <View style={{
          alignItems: 'flex-start',
          marginLeft: 15,
          marginTop: 20,
        }}>
          <Button
            style={{
              fontSize: 19,
              color: '#FFFFFF',
              fontFamily: 'Lato-Semibold',
              textDecorationLine: 'underline',
            }}
            styleDisabled={{
              opacity: 0.6,
            }}
            disabled={this.state.name.trim() ? false : true}
            onPress={() => {
              Store.setName(this.state.name);
              Actions.channels();
            }}
          >
            Next
          </Button>
        </View>
      </View>
    );
  }
}
