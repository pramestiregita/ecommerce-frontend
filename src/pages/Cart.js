/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container,
} from 'reactstrap';

// importing components
import Navbar from '../components/Navbar2';

export default function Cart() {
  return (
    <>
      <Navbar />
      <Container className="mb-5 d-flex justify-content-center align-items-center">
        <h1>My Cart</h1>
      </Container>
    </>
  );
}
