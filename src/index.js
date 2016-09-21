import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Layout from './libs/Layout';

import Home from './components/Home';
import Channels from './components/Channels';
import Chat from './components/Chat';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' hideNavBar={true} component={Home}/>
          <Scene key='channels' hideNavBar={false} title='Channels' component={Channels} {...Layout.navigationBar}/>
          <Scene key='chat' hideNavBar={false} component={Chat} {...Layout.navigationBar}/>
        </Scene>
      </Router>
    );
  }
}
