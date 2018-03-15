import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

import LikesCounter from './Likes/LikesCounter'

class Comment extends Component {
  render () {
    const comment = this.props.comment;
    const author = comment.author;

    return (
      <ListGroupItem>
        <div>
          <div>
            <strong>{author.first_name} {author.last_name}</strong> {comment.body}
          </div>
          <LikesCounter likes={comment.likes}/>
        </div>
      </ListGroupItem>
    );
  }
}

export default Comment;
