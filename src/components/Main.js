import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

class Main extends Component {
  render () {
    const style = {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
    return (
      <div style={style}>
        <Sidebar />
        <Feed />
      </div>
    );
  }
}

export default Main;
