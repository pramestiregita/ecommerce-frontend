/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/address.css';
import {
  Button, Card, Col, Input, Jumbotron, Modal, ModalBody, ModalFooter, Row,
} from 'reactstrap';

// importing images
import { Link } from 'react-router-dom';
import edit from '../assets/images/edit.svg';
import account from '../assets/images/user.svg';
import map from '../assets/images/map.svg';
import order from '../assets/images/order.svg';

// importing components
import Navbar from '../components/Navbar2';

import profileAction from '../redux/actions/profile';

const { REACT_APP_BACKEND_URL } = process.env;

export class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.auth.token,
      modalOpen: false,
    };
  }

  componentDidMount() {
    this.props.getProfile(this.state.token);
  }

  render() {
    const { data } = this.props.profile;
    return (
      <>
        <Modal className="address" isOpen={this.state.modalOpen}>
          <ModalBody>
            <Row style={{ width: 810 }}>
              <Col md={12}>
                <Input type="text" />
              </Col>
              <Col md={6}>
                <Input type="text" />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-2 rounded-pill" style={{ width: 160 }} onClick={() => this.setState({ modalOpen: false })}>
              Cancel
            </Button>
            <Button className="btn-1 rounded-pill" style={{ width: 160 }}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
        <div className="vh-100">
          <Navbar />
          {data.length && data.map((item) => (
            <Row>
              <Col md={3}>
                <div className="sidebar mt-5">
                  <Row>
                    <Col md={4}>
                      <img className="rounded-circle" src={REACT_APP_BACKEND_URL.concat(item.profile_picture)} alt="avatar" width="60px" height="60px" />
                    </Col>
                    <Col md={8}>
                      <div>{item.name}</div>
                      <div className="edit d-flex align-items-center">
                        <div className="icon">
                          <img src={edit} alt="..." width="16px" height="16px" />
                        </div>
                        <div className="desc">
                          <span>Ubah profile</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Link to="/my-profile" className="linkColor">
                    <Row className="user d-flex align-items-center mt-5">
                      <Col md={3}>
                        <Button>
                          <img src={account} alt="" />
                        </Button>
                      </Col>
                      <Col>
                        <span>My Account</span>
                      </Col>
                    </Row>
                  </Link>
                  <Link to="/my-address" className="linkColor">
                    <Row className="map d-flex align-items-center mt-3">
                      <Col md={3}>
                        <Button>
                          <img src={map} alt="" />
                        </Button>
                      </Col>
                      <Col>
                        <span>Shipping Address</span>
                      </Col>
                    </Row>
                  </Link>
                  <Link to="/my-order" className="linkColor">
                    <Row className="order d-flex align-items-center mt-3">
                      <Col md={3}>
                        <Button>
                          <img src={order} alt="" />
                        </Button>
                      </Col>
                      <Col>
                        <span>My Order</span>
                      </Col>
                    </Row>
                  </Link>
                </div>
              </Col>
              <Col md={9}>
                <Jumbotron fluid className="h-100 m-0">
                  <Card className="main ml-5">
                    <div className="m-4">
                      <div className="h5 font-weight-bold">Choose another address</div>
                      <div className="text-muted">Manage your shipping address</div>
                      <div className="my-3" style={{ backgroundColor: '#D4D4D4', height: 2 }}>&nbsp;</div>
                      <Row className="mt-4 mx-3">
                        <Col md={12}>
                          <Button onClick={() => this.setState({ modalOpen: true })} block className="btn-3 rounded-lg" style={{ borderStyle: 'dotted', borderColor: '#9b9b9b' }}>
                            <div className="text-center text-muted my-4">Add new address</div>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Jumbotron>
              </Col>
            </Row>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
