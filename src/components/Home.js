import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Backend from '../libs/Backend';
import Layout from '../libs/Layout';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={Layout.homeContainer}>
        <Text style={{
          marginTop: 50,
          color: '#FFFFFF',
          fontSize: 19,
          marginLeft: 15,
        }}>
          Enter your name :
        </Text>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => {
            this.setState({
              name: name,
            });
          }}
          placeholder="Developer"
          {...Layout.textInput}
        />
        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginTop: 20,
          }}
          onPress={() => {
            Backend.setName(this.state.name);
            Actions.channels();
          }}
        >
          <Text style={{
            color: '#FFFFFF',
            fontSize: 19,
          }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
