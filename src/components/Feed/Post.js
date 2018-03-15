import React, { Component } from 'react';
import { Panel, ListGroup } from 'react-bootstrap';
import Comment from './Comment'
import LikesCounter from './Likes/LikesCounter'

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comments: [],
      postId: this.props.post.id
    }
  }

  render () {
    const SHOW_COMMENTS = false;
    const post = this.props.post.node;
    const author = post.author;
    const commentsCount = post.comments_count;

    const commentsToRender = this.state.comments.map((comment, index) => {
      return (
        <Comment comment={comment} key={index} />
      )
    })
    var commentsGroup = null;
    if(commentsToRender.length > 0) {
      commentsGroup = (
        <ListGroup>
          { commentsToRender }
        </ListGroup>
      );
    } else {
      commentsGroup = (<Panel.Body>There are no comments yet</Panel.Body>);
    }

    return (
      <Panel defaultExpanded={SHOW_COMMENTS} onToggle={() => {
        this.setState({ postId: post.id }, () => {
          this._getComments();
        });
      }}>
        <Panel.Heading>
          <Panel.Title><strong><a href={`/users/${this.getIdFromGid(author.id)}`}>{author.first_name} {author.last_name}</a></strong>: {post.body}</Panel.Title>
        </Panel.Heading>
        <Panel.Footer>
          <LikesCounter likes={post.likes}/>
          <Panel.Toggle componentClass="a" className="cursor-pointer">{`${commentsCount} comment${commentsCount !== 1 ? 's' : ''}`}</Panel.Toggle>
        </Panel.Footer>
        <Panel.Collapse>
          { commentsGroup }
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
    const comments = result.data.node.comments;
    this.setState({ comments })
  }

  getIdFromGid = (gid) => {
    const splitGid = gid.split("/");
    return splitGid[splitGid.length-1];
  }
}

const COMMENTS_QUERY = gql`
  query CommentsQuery($postId: ID!) {
    node(id: $postId) {
      id
      ...on Post {
        comments {
          id
          author {
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

export default withApollo(Post);
