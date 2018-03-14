import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class Comment extends Component {
  render () {
    const comment = this.props.comment.node;
    const author = comment.author;

    return (
      <ListGroupItem>
        <strong>{author.first_name} {author.last_name}</strong> {comment.body}
      </ListGroupItem>
    );
  }
}

export default Comment;
