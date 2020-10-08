/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Button, ButtonGroup,
  Form, Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import logo from '../assets/images/logo.svg';

export default function Register() {
  return (
    <>
      <Container className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <div className="text-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="mt-3">
            <span className="h5">Please sign up with your account</span>
          </div>
        </div>
        <div className="mt-4">
          <ButtonGroup>
            <Button className="btn-1 form rounded-left">Customer</Button>
            <Button className="btn-2 form rounded-right">Seller</Button>
          </ButtonGroup>
        </div>
        <Form className="auth mt-4">
          <Input type="text" className="pl-3 auth-input rounded-lg" placeholder="Name" aria-label="Name" />
          <Input type="text" className="mt-3 pl-3 auth-input rounded-lg" placeholder="Email" aria-label="Email" />
          <Input type="password" className="mt-3 pl-3 auth-input rounded-lg" placeholder="Password" aria-label="Password" />
          <Link to="/login">
            <Button className="w-100 mt-3 btn-1 text-uppercase form rounded-pill">Sign up</Button>
          </Link>
        </Form>
        <div className="mt-3">
          <span>
            Already have an account?
            <Link to="/login" className="fontColor text-decoration-none">Login</Link>
          </span>
        </div>
      </Container>
    </>
  );
}
