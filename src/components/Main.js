import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { Grid, Row, Col } from 'react-bootstrap';

class Main extends Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <Feed />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default Main;
