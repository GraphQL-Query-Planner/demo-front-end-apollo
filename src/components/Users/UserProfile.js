import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import Feed from '../Feed/Feed';

class UserProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: [],
      id: `gid://webscale/User/${this.props.match.params.id}`
    }
    this._getUser();
  }

  render () {
    return (
      <div>
        <h2>{this.state.user.first_name}'s Wall</h2>
        <Feed receiverId={this.getIdFromGid(this.props.match.params.id)} />
      </div>
    );
  }

  _getUser = async () => {
    const { id } = this.state;
    const result = await this.props.client.query({
      query: USER_QUERY,
      variables: { id },
    })
    const user = result.data.node;
    this.setState({ user })
  }


  getIdFromGid = (gid) => {
    const splitGid = gid.split("/");
    return splitGid[splitGid.length-1];
  }
}

const USER_QUERY = gql`
query UserQuery($id: ID!) {
  node(id: $id) {
    id
    ...on User {
      first_name
    }
  }
}
`


export default withApollo(UserProfile);
