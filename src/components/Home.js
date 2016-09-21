import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Layout from '../libs/Layout';
import Backend from '../libs/Backend';
import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={Layout.homeContainer}>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 15,
            color: '#FFFFFF',
            fontSize: 19,
          }}
        >
          Enter your name :
        </Text>
        <TextInput
          value={this.state.name}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          placeholder="Developer"
          {...Layout.textInput}
        />
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginLeft: 15,
          }}
          onPress={() => {
            Backend.setName(this.state.name);
            Actions.channels();
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
