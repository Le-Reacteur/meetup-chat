import React from 'react';
import {
} from 'react-native';


import {Router, Scene} from 'react-native-router-flux';
import Home from './components/Home';
import Channels from './components/Channels';
import Chat from './components/Chat';
import Layout from './libs/Layout';

export default class MeetupChat extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' hideNavBar={true} component={Home}/>
          <Scene key='channels' hideNavBar={false} component={Channels} title='CHANNELS' {...Layout.navigationBar}/>
          <Scene key='chat' hideNavBar={false} component={Chat} {...Layout.navigationBar}/>
        </Scene>
      </Router>
    );
  }
}
