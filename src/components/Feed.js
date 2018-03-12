import React, { Component } from 'react';
import Post from './Post';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Feed extends Component {
  render () {
    const style = {
      flex: '7'
    }

    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return (
        <div style={style}>Loading...</div>
      );
    }

    if (this.props.feedQuery && this.props.feedQuery.error ) {
      console.log(this.props.feedQuery.error);
      return (
        <div style={style}>Error</div>
      );
    }

    const postsToRender = this.props.feedQuery.posts.edges
    console.log(postsToRender);
    return (
      <div style={style}>
        <h2>Posts</h2>

        { postsToRender.map((post, index) => {
            return (<Post key={index} post={post} />)
          })
        }
      </div>
    );
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    posts(first: 10) {
      edges {
        node {
          id
          author {
            first_name
            last_name
          }
          body
        }
      }
    }
  }
`


export default graphql(FEED_QUERY, { name: 'feedQuery' }) (Feed);
