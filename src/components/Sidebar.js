import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Sidebar extends Component {
  render () {
    console.log("Sidebar props");
    console.log(this.props);
    return (
      <div>
        <h2>Resources</h2>
        <ButtonGroup vertical>
          <Button bsSize="large" href="/posts" active={this.props.location.pathname === "/posts"}>
            News Feed
          </Button>
          <Button bsSize="large" href="/users" active={this.props.location.pathname === "/users"}>
            Friends
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Sidebar;
