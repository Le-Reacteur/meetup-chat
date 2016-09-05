import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './components/Home';
import Channels from './components/Channels';
import Chat from './components/Chat';
import Layout from './libs/Layout';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' component={Home} hideNavBar={true}/>
          <Scene key='channels' component={Channels} hideNavBar={false} {...Layout.navigationBar} title='CHANNELS'/>
          <Scene key='chat' component={Chat} hideNavBar={false} {...Layout.navigationBar}/>
        </Scene>
      </Router>
    );
  }
}
