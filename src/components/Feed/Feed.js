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
    const userFeedParams = {
      query: USER_FEED_QUERY,
      variables: { receiverId }
    }
    const feedParams = {
      query: FEED_QUERY,
      variables: {}
    }

    var posts = [];
    if (receiverId) {
      const result = await this.props.client.query(userFeedParams);
      posts = result.data.node.wall;
    } else {
      const result = await this.props.client.query(feedParams);
      posts = result.data.posts.edges.map((edge) => { return edge.node });
    }


    this.setState({ posts })
  }
}

const USER_FEED_QUERY = gql`
  query FeedQuery($receiverId: ID!) {
    node(id: $receiverId) {
      id
      ...on User {
        wall {
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
          comments_count
        }
      }
    }
  }
`

const FEED_QUERY = gql`
  query FeedQuery {
    posts(first: 10) {
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
          comments_count
        }
      }
    }
  }
`

export default withApollo(Feed);
