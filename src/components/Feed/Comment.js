import React, { Component } from 'react';

class Comment extends Component {
  render () {
    const comment = this.props.comment.node;
    const author = comment.author;

    return (
      <div><strong>{author.first_name} {author.last_name}</strong> {comment.body}</div>
    );
  }
}

export default Comment;
