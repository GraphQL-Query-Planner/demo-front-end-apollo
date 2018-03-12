import React, { Component } from 'react';
import User from './User';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class UsersPage extends Component {
  render () {
    if (this.props.usersQuery && this.props.usersQuery.loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (this.props.usersQuery && this.props.usersQuery.error ) {
      console.log(this.props.usersQuery.error);
      return (
        <div>Error</div>
      );
    }

    const usersToRender = this.props.usersQuery.users.edges
    console.log(usersToRender);
    return (
      <div>
        <h2>Users ({usersToRender.length})</h2>

        { usersToRender.map((user, index) => {
            return (<User key={index} user={user} />)
          })
        }
      </div>
    );
  }
}

const USERS_QUERY = gql`
  query usersQuery {
    users {
      edges {
        node {
          first_name
          last_name
        }
      }
    }
  }
`


export default graphql(USERS_QUERY, { name: 'usersQuery' }) (UsersPage);
