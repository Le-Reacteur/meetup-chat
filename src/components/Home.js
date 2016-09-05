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
        <Text style={{
          marginTop: 50,
          color: '#FFFFFF',
          marginLeft: 15,
          fontSize: 19,
        }}>
          Enter your name :
        </Text>
        <TextInput
          value={this.state.value}
          onChangeText={(name) => {
            this.setState({
              name: name,
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
            marginTop: 20,
            marginLeft: 15,
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
