/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/address.css';
import {
  Button, Card, CardBody, Col, Form, FormText, Input,
  Jumbotron, Modal, ModalBody, ModalFooter,
  ModalHeader, Row,
} from 'reactstrap';

// importing images
import edit from '../assets/images/edit.svg';
import account from '../assets/images/user.svg';
import map from '../assets/images/map.svg';
import order from '../assets/images/order.svg';

// importing components
import Navbar from '../components/Navbar2';

import profileAction from '../redux/actions/profile';
import addresAction from '../redux/actions/address';

const { REACT_APP_BACKEND_URL } = process.env;

export class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.auth.token,
      modalOpen: false,
      name: '',
      recipientName: '',
      recipientPhone: '',
      address: '',
      postalCode: '',
      city: ''
    };
  }

  componentDidMount() {
    this.props.getProfile(this.state.token);
    this.props.getAddress(this.state.token);
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addAddress = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const { data: profile } = this.props.profile;
    const { data: addressList } = this.props.address;
    return (
      <>
        <Modal className="address" isOpen={this.state.modalOpen}>
          <ModalHeader>
            <div className="my-2 h3 font-weight-bold text-center">Add new address</div>
          </ModalHeader>
          <Form onSubmit={this.addAddress}>
            <ModalBody>
              <Row style={{ width: 810 }} className='px-2'>
                <Col className="my-2" md={12}>
                  <FormText color="muted">Save address as (ex : home address, office address)</FormText>
                  <Input onChange={()=>this.onChangeText} name='name' type="text" />
                </Col>
                <Col className="my-2" md={6}>
                  <FormText color="muted">Recipient’s name</FormText>
                  <Input onChange={()=>this.onChangeText} name='recipientName' type="text" />
                </Col>
                <Col className="my-2" md={6}>
                  <FormText color="muted">Recipient's telephone number</FormText>
                  <Input onChange={()=>this.onChangeText} name='recipientPhone' type="text" />
                </Col>
                <Col className="my-2" md={6}>
                  <FormText color="muted">Address</FormText>
                  <Input onChange={()=>this.onChangeText} name='address' type="text" />
                </Col>
                <Col className="my-2" md={6}>
                  <FormText color="muted">Postal code</FormText>
                  <Input onChange={()=>this.onChangeText} name='postalCode' type="text" />
                </Col>
                <Col className="my-2" md={6}>
                  <FormText color="muted">City or Subdistrict</FormText>
                  <Input onChange={()=>this.onChangeText} name='city' type="text" />
                </Col>
                <Col md={12} className="d-flex align-items-center">
                  <div>
                    <Input className="m-0 position-relative" type="checkbox" name="check" />
                  </div>
                  <div className="ml-2 mb-2">
                    <FormText color="muted">Make it the primary address</FormText>
                  </div>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button className="btn-2 rounded-pill" style={{ width: 160 }} onClick={() => this.setState({ modalOpen: false })}>
                Cancel
              </Button>
              <Button type="submit" className="btn-1 rounded-pill" style={{ width: 160 }}>
                Save
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
        <div className="vh-100">
          <Navbar />
          {profile.length && profile.map((item) => (
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
                        <Col className="my-2" md={12}>
                          <Button onClick={() => this.setState({ modalOpen: true })} block className="btn-3 rounded-lg" style={{ borderStyle: 'dotted', borderColor: '#9b9b9b' }}>
                            <div className="text-center text-muted my-4">Add new address</div>
                          </Button>
                        </Col>
                        <Col className="my-2" md={12}>
                          {addressList.length && addressList.map((address) => (
                            <Card className="rounded-lg">
                              <CardBody>
                                <div className="mx-2">
                                  <div className="font-weight-bold">{address.recipient_name}</div>
                                  <div className="mt-2 mb-3">
                                    {address.address}
                                    ,
                                    {' '}
                                    {address.city}
                                    ,
                                    {' '}
                                    {address.postal_code}
                                  </div>
                                </div>
                                <Button className="change font-weight-bold">Change Address</Button>
                              </CardBody>
                            </Card>
                          ))}
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
  address: state.address,
});

const mapDispatchToProps = {
  getProfile: profileAction.getProfile,
  getAddress: addresAction.getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
