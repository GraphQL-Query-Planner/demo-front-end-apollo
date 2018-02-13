import React, { Component } from 'react';
import Post from './Post';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Feed extends Component {
  render () {
    // const postsToRender = [
    //   {
    //     id: '1',
    //     author: {
    //       first_name: 'Bobby',
    //       last_name: 'Orr'
    //     },
    //     body: "He shoots. He scores!"
    //   }
    // ];

    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (this.props.feedQuery && this.props.feedQuery.error ) {
      console.log(this.props.feedQuery.error);
      return (
        <div>Error</div>
      );
    }

    const postsToRender = this.props.feedQuery.posts.edges
    console.log(postsToRender);
    return (
      <div>
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
