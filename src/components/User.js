import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class User extends Component {
  render () {
    const user = this.props.user.node;

    return (
      <Panel>
        <Panel.Body>{user.first_name} {user.last_name}</Panel.Body>
      </Panel>
    );
  }
}

export default User;
