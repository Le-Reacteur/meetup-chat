import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';

import Button from 'react-native-button';
import Layout from '../libs/Layout';
import Store from '../libs/Store';

import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={Layout.homeContainer}>
        <Text style={{
          marginTop: 50,
          color: '#ffffff',
          marginLeft: 15,
          fontSize: 19,
        }}>
          Enter your name :
        </Text>
        <TextInput
          value={this.state.name}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          placeholder='Developer'
          {...Layout.textInput}
        />
        <Button
          style={{
            color: '#ffffff',
            textDecorationLine: 'underline',
            fontSize: 19,
            marginTop: 10,
          }}
          onPress={() => {
            Store.setName(this.state.name);
            Actions.channels();
          }}
        >
          Next
        </Button>
      </View>
    );
  }
}
