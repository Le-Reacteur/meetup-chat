import React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
