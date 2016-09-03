import React from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Layout from './libs/Layout';
import Store from './libs/Store';
import Backend from './libs/Backend';

import Home from './components/Home';
import Channels from './components/Channels';
import Chat from './components/Chat';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Backend.setStore(Store);
    Backend.init();
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" hideNavBar={true} component={Home}/>
          <Scene key="channels" hideNavBar={false} component={Channels} title='CHANNELS' {...Layout.navigationBar}/>
          <Scene key="chat" hideNavBar={false} component={Chat} title='' {...Layout.navigationBar}/>
        </Scene>
      </Router>
    );
  }
}
