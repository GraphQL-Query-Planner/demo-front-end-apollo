import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed/Feed';
import UsersPage from './Users/UsersPage';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Main extends Component {
  render () {
    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9}>
              <Route path="/posts" component={Feed}/>
              <Route path="/users" component={UsersPage}/>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default Main;
