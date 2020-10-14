/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/profile.css';
import {
  Button,
  Card, Col, Form, FormText, Input, Jumbotron, Label, Modal, ModalBody, ModalFooter, Row,
} from 'reactstrap';

// importing images
import edit from '../assets/images/edit.svg';
import account from '../assets/images/user.svg';
import map from '../assets/images/map.svg';
import order from '../assets/images/order.svg';

// importing components
import Navbar from '../components/Navbar2';

import profileAction from '../redux/actions/profile';

const { REACT_APP_BACKEND_URL } = process.env;

export default function Profile() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [body, setBody] = useState({});
  const token = useSelector((state) => state.auth.token);
  const { data, alertMsg } = useSelector((state) => state.profile);
  const form = new FormData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length) {
      setName(data[0].name);
      setEmail(data[0].email);
      setPhone(data[0].phone);
      setBirthdate(data[0].birthdate);
      setGender(data[0].gender);
      setImage(data[0].profile_picture);
    }
  }, [data]);
  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, [dispatch, token]);

  const saveChange = (e) => {
    e.preventDefault();
    let genderId = 0;
    if (gender === 'Male') {
      genderId = 1;
    } else {
      genderId = 2;
    }
    setBody({
      name,
      email,
      phone,
      genderId,
      birthdate,
    });
  };

  useEffect(() => {
    dispatch(profileAction.editProfile(token, body));
    if (alertMsg !== '') {
      setAlertOpen(true);
    }
  }, [token, body]);

  const uploadPict = (e) => {
    form.append('picture', e.target.files[0]);
    dispatch(profileAction.editPict(token, form));
    if (data.length) {
      setImage(data[0].profile_picture);
    }
  };

  return (
    <>
      <div className="vh-100">
        <Navbar />
        <Row>
          <Col md={3}>
            <div className="sidebar mt-5">
              <Row>
                <Col md={4}>
                  <img className="rounded-circle" src={REACT_APP_BACKEND_URL.concat(image)} alt="avatar" width="60px" height="60px" />
                </Col>
                <Col md={8}>
                  <div>{name}</div>
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
                  <div className="h5 font-weight-bold">My Profile</div>
                  <div className="text-muted">Manage your profile information</div>
                  <div className="my-3" style={{ backgroundColor: '#D4D4D4', height: 2 }}>&nbsp;</div>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form onSubmit={saveChange}>
                        <Row className="d-flex align-items-center mb-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="name">Name</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setName(e.target.value)} className="rounded-lg" type="text" name="name" value={name} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Email</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setEmail(e.target.value)} className="rounded-lg" type="text" name="email" value={email} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="phone">Phone Number</Label>
                          </Col>
                          <Col>
                            <Input onChange={(e) => setPhone(e.target.value)} className="rounded-lg" type="text" name="phone" value={phone} style={{ height: 48 }} />
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted">Gender</Label>
                          </Col>
                          <Col>
                            <Row className="ml-2">
                              {['Male', 'Female'].map((item, i) => (
                                <Label className={i === 0 ? 'ml-3' : 'ml-5'}>
                                  <Input onChange={() => setGender(item)} name="gender" type="radio" checked={item === gender} />
                                  <span>{item}</span>
                                </Label>
                              ))}
                            </Row>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-4">
                          <Col md={4} className="text-right">
                            <Label className="m-0 text-muted" for="email">Date of Birth</Label>
                          </Col>
                          <Col>
                            <Input
                              onChange={(e) => setBirthdate(e.target.value)}
                              type="text"
                              name="date"
                              placeholder="date"
                              value={birthdate}
                            />
                            <FormText color="muted">format: yyyy-mm-dd</FormText>
                          </Col>
                        </Row>
                        <Row className="d-flex align-items-center my-5">
                          <Col md={4} className="text-right" />
                          <Col md={8}>
                            <Modal centered isOpen={alertOpen} className="text-center">
                              <ModalBody>
                                {alertMsg}
                              </ModalBody>
                              <ModalFooter>
                                <Button onClick={() => setAlertOpen(false)}>Close</Button>
                              </ModalFooter>
                            </Modal>
                            <Button type="submit" className="btn-1 rounded-pill" style={{ width: 100 }}>Save</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                    <Col md={1} className="p-0 d-flex justify-content-center">
                      <div className="h-50" style={{ backgroundColor: '#D4D4D4', width: 2 }}>&nbsp;</div>
                    </Col>
                    <Col md={3} className="pr-5">
                      <Form className="d-flex flex-column align-items-center">
                        <div>
                          <img className="rounded-circle" src={REACT_APP_BACKEND_URL.concat(image)} alt="avatar" width="110px" height="110px" />
                        </div>
                        <div className="my-4">
                          {/* <Button type="submit" className="btn-2 rounded-pill" style={{ width: 140 }}>Select Image</Button> */}
                          <label>
                            <span className="btn btn-2 rounded-pill">Select Image</span>
                            <Input onChange={uploadPict} style={{ display: 'none' }} type="file" accept=".jpg,.png" />
                          </label>
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
