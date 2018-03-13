import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class LikeUser extends Component {
  render () {
    const user = this.props.user;

    return (
      <ListGroupItem key={this.props.index} href={`/users/${this.getIdFromGid(user.id)}`}>
        {user.first_name} {user.last_name}
      </ListGroupItem>
    );
  }

  getIdFromGid = (gid) => {
    const splitGid = gid.split("/");
    return splitGid[splitGid.length-1];
  }
}

export default LikeUser;
