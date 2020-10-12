/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/profile.css';
import {
  Button,
  Card, Col, Form, Input, Jumbotron, Label, Row,
} from 'reactstrap';

// importing images
import picture from '../assets/images/profile2.jpg';
import edit from '../assets/images/edit.svg';
import account from '../assets/images/user.svg';
import map from '../assets/images/map.svg';
import order from '../assets/images/order.svg';
import avatar from '../assets/images/profile3.jpg';

// importing components
import Navbar from '../components/Navbar2';

import profileAction from '../redux/actions/profile';

export default function Profile() {
  const token = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, [dispatch, token]);
  let user = {};
  if (data.length) {
    user = data[0];
  }
  const updateAvatar = (e) => {
    e.preventDefault();
  };

  // console.log(user[0].name);
  return (
    <>
      <div className="vh-100">
        <Navbar />
        <Row>
          <Col md={3}>
            <div className="sidebar mt-5">
              <Row>
                <Col md={4}>
                  <img className="rounded-circle" src={picture} alt="avatar" />
                </Col>
                <Col md={8}>
                  <div>{user.name}</div>
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
            </div>
          </Col>
          <Col md={9}>
            <Jumbotron fluid className="h-100 m-0">
              <Card className="main ml-5">
                <div className="m-4">
                  <div className="h5 font-weight-bold">My Profile</div>
                  <div className="text-muted">Manage your profile information</div>
                  <div className="my-3" style={{ backgroundColor: '#D4D4D4', height: 2 }}>&nbsp;</div>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form>
                        <Row className="d-flex align-items-center mb-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="name">Name</Label>
                          </Col>
                          <Col>
                            <Input className="rounded-lg" type="text" name="name" value={user.name} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Email</Label>
                          </Col>
                          <Col>
                            <Input className="rounded-lg" type="text" name="email" value={user.email} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="phone">Phone Number</Label>
                          </Col>
                          <Col>
                            <Input className="rounded-lg" type="text" name="phone" value={user.phone} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted">Gender</Label>
                          </Col>
                          <Col>
                            <Row className="ml-2">
                              <Col md={4} className="d-flex">
                                <div>
                                  <Input type="radio" name="gender" />
                                </div>
                                <div>
                                  <Label className="m-0 text-muted">Laki-laki</Label>
                                </div>
                              </Col>
                              <Col className="d-flex">
                                <div>
                                  <Input type="radio" name="gender" />
                                </div>
                                <div>
                                  <Label className="m-0 text-muted">Perempuan</Label>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Date of Birth</Label>
                          </Col>
                          <Col>
                            <Input
                              type="date"
                              name="date"
                            />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-5">
                          <Col md={4} className="text-right">
                          &nbsp;
                          </Col>
                          <Col>
                            <Button type="submit" className="btn-1 rounded-pill" style={{ width: 100 }}>Save</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    <Col md={1} className="p-0 d-flex justify-content-center">
                      <div className="h-50" style={{ backgroundColor: '#D4D4D4', width: 2 }}>&nbsp;</div>
                    </Col>
                    <Col md={3} className="pr-5">
                      <Form onSubmit={() => updateAvatar()} className="d-flex flex-column align-items-center">
                        <div>
                          <img className="rounded-circle" src={avatar} alt="avatar" width="110px" height="110px" />
                        </div>
                        <div className="my-4">
                          <Button type="submit" className="btn-2 rounded-pill" style={{ width: 140 }}>Select Image</Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </>
  );
}
