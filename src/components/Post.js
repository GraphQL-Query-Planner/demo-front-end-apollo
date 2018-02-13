import React, { Component } from 'react';

class Post extends Component {
  render () {
    const post = this.props.post.node;
    const author = post.author;

    return (
      <div>
        <strong>{author.first_name} {author.last_name}</strong>: {post.body}
      </div>
    );
  }
}

export default Post;
