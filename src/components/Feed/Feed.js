import React, { Component } from 'react';
import Post from './Post';

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class Feed extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [],
      receiverId: this.props.receiverId
    }

    this._getPosts();
  }

  render () {
    const postsToRender = this.state.posts;
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

  _getPosts = async () => {
    const { receiverId } = this.state;
    const result = await this.props.client.query({
      query: FEED_QUERY,
      variables: { receiverId },
    })
    const posts = result.data.posts.edges;
    this.setState({ posts })
  }
}

const FEED_QUERY = gql`
  query FeedQuery($receiverId: ID) {
    posts(first: 10, receiver_id: $receiverId) {
      edges {
        node {
          id
          author {
            id
            first_name
            last_name
          }
          body
          likes {
            id
            user {
              id
              first_name
              last_name
            }
          }
        }
      }
    }
  }
`


export default withApollo(Feed);
