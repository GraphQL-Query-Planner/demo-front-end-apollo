import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Post extends Component {
  render () {
    const post = this.props.post.node;
    const author = post.author;

    return (
      <Panel>
        <Panel.Heading>{author.first_name} {author.last_name}</Panel.Heading>
        <Panel.Body>{post.body}</Panel.Body>
      </Panel>
    );
  }
}

export default Post;
