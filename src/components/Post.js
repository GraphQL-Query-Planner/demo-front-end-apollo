import React, { Component } from 'react';

class Post extends Component {
  render () {
    const style = {
      border: '1px solid black',
      backgroundColor: '#fafafa',
      padding: '10px',
      margin: '10px',
    }

    const post = this.props.post.node;
    const author = post.author;

    return (
      <div style={style}>
        <strong>{author.first_name} {author.last_name}</strong>: {post.body}
      </div>
    );
  }
}

export default Post;
