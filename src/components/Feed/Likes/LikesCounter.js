import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

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

    return (
      <div style={style}>
        <a className="cursor-pointer" onClick={this.handleShow}>
          {`${likesCount} like${likesCount !== 1 ? 's' : ''}`}
        </a>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Likes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Here are the likes</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
}

export default LikesCounter;
