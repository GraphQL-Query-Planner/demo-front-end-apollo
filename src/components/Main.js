import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Sidebar from './Sidebar';
import GenericFeed from './Feed/GenericFeed';
import UsersPage from './Users/UsersPage';
import UserProfile from './Users/UserProfile';

class Main extends Component {
  render () {
    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={3}>
              <Route component={Sidebar} />
            </Col>
            <Col xs={12} md={9}>
              <Route path="/posts" component={GenericFeed}/>
              <Route exact path="/users" component={UsersPage}/>
              <Route path="/users/:id" component={UserProfile}/>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default Main;
