import React, { Component } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

import LikeUser from './LikeUser';

class LikesCounter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    }
  }

  handleClose() {
    console.log(this.state.show);
    this.setState({ show: false });
    console.log(this.state.show);
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    const likesCount = this.props.likes.length;
    const style = { display: 'inline' };

    const likesToRender = this.props.likes.map((like, index) => {
      return (
        <LikeUser user={like.user} key={index} />
      )
    });
    var likesGroup = (<ListGroup>{ likesToRender }</ListGroup>);
    var likesText = null;
    if (likesCount > 0) {
      likesText = (
        <span>
          <a className="cursor-pointer" onClick={this.handleShow}>
            {`${likesCount} like${likesCount !== 1 ? 's' : ''}`}
          </a>
          &nbsp;&nbsp;
        </span>
      );
    }

    return (
      <div style={style}>
        { likesText }
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Likes</Modal.Title>
          </Modal.Header>
              { likesGroup }
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LikesCounter;
