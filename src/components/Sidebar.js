import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Sidebar extends Component {
  render () {
    return (
      <div>
        <h2>Resources</h2>
        <ButtonGroup vertical>
          <Button bsSize="large" href="users">
            Users
          </Button>
          <Button bsSize="large" href="posts">
            Posts
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Sidebar;
