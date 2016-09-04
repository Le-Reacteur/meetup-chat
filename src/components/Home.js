import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from 'react-native-button';
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
        <TouchableOpacity
          onPress={() => {
            Backend.setName(this.state.name);
            Actions.channels();
          }}
          style={{
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              color: '#ffffff',
              textDecorationLine: 'underline',
              fontSize: 19,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
