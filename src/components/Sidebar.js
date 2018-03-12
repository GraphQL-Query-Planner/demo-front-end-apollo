import React, { Component } from 'react';

class Sidebar extends Component {
  render () {
    const style = {
      flex: '1',
      borderRight: '2px solid black'
    }

    return (
      <div style={style}>
        <h2>Navigation</h2>
      </div>
    );
  }
}

export default Sidebar;
