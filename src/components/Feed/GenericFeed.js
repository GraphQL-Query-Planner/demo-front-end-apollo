import React, { Component } from 'react';

import Feed from './Feed';

class GenericFeed extends Component {
  render () {
    return (
      <div>
        <h2>Posts</h2>
        <Feed />
      </div>
    );
  }
}

export default GenericFeed;
