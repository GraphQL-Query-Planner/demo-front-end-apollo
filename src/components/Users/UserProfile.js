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
    if(this.state.user) {
      return (
        <div>
          <h2>{this.state.user.first_name}'s Wall</h2>
          <Feed receiverId={`gid://webscale/User/${this.props.match.params.id}`} />
        </div>
      );
    }
    return (
      <div>The user does not exist</div>
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
