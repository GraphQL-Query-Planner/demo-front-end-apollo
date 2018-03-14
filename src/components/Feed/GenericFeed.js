import React, { Component } from 'react';

import Feed from './Feed';

class GenericFeed extends Component {
  render () {
    return (
      <div>
        <h2>News Feed</h2>
        <Feed />
      </div>
    );
  }
}

export default GenericFeed;
