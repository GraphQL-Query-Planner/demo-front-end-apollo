import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Comment from './Comment'

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends Component {
  state = {
    comments: [],
    postId: 0
  }

  render () {
    const SHOW_COMMENTS = false;
    const post = this.props.post.node;
    const author = post.author;

    const commentsGroup = this.state.comments.map((comment, index) => {
      return (
        <ListGroupItem key={index}>
          <Comment comment={comment} />
        </ListGroupItem>
      )
    })

    return (
      <Panel defaultExpanded={SHOW_COMMENTS} onToggle={() => {
        this.setState({ postId: this.getIdFromGid(post.id) }, () => {
          this._getComments();
        });
      }}>
        <Panel.Heading>
          <Panel.Title><strong>{author.first_name} {author.last_name}</strong>: {post.body}</Panel.Title>
          <Panel.Toggle>Toggle comments</Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <ListGroup>
              {commentsGroup.length > 0 ? commentsGroup : 'There are no comments yet'}
            </ListGroup>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }


  _getComments = async () => {
    const { postId } = this.state;
    const result = await this.props.client.query({
      query: COMMENTS_QUERY,
      variables: { postId },
    })
    const comments = result.data.comments.edges;
    this.setState({ comments })
  }

  getIdFromGid = (gid) => {
    return gid[gid.length-1];
  }
}

const COMMENTS_QUERY = gql`
  query CommentsQuery($postId: ID!) {
    comments(first: 10, content_id: $postId, content_type: "Post") {
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

export default withApollo(Post);
