/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Col, Container, Row,
} from 'reactstrap';

import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';

import product1 from '../assets/images/product1.svg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';

export default function ProductDetail() {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <>
      {isLogin ? <Navbar2 /> : <Navbar1 />}
      <Container className="mt-4">
        <div>
          <span className="text-muted h6">{'Home > Category > Shoes'}</span>
        </div>
        <Row className="my-3">
          <Col md={6}>
            <Row>
              <Col md={6} className="my-3">
                <img width="100%" src={product1} alt="..." />
              </Col>
              <Col md={6} className="my-3">
                <img width="100%" src={product2} alt="..." />
              </Col>
              <Col md={6} className="my-3">
                <img width="100%" src={product3} alt="..." />
              </Col>
              <Col md={6} className="my-3">
                <img width="100%" src={product4} alt="..." />
              </Col>
            </Row>
          </Col>
          <Col md={6} className="my-3 d-flex flex-column">
            <span className="h4 font-weight-bold">Nike CruzrOne (Bright Crimson)</span>
            <span className="h6 text-muted">Nike</span>
            <div>Rating</div>
            <span className="h6 text-muted mt-4">Price</span>
            <span className="h4 font-weight-bold">$ 20.0</span>
            <span className="mt-4">Color</span>
            <div>colors</div>
            <Row className="mt-4">
              <Col md={7}>
                <Row>
                  <Col md={6}>
                    <span>Size</span>
                  </Col>
                  <Col md={6}>
                    <span>Jumlah</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 no-gutters">
              <Col md={7}>
                <Row className="">
                  <Col md={6} className="pr-1">
                    <Button block className="btn-2 rounded-pill py-2">Chat</Button>
                  </Col>
                  <Col md={6} className="pl-1">
                    <Button block className="btn-2 rounded-pill py-2">Add cart</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 no-gutters">
              <Col md={7}>
                <Button block className="btn-1 rounded-pill py-2">Buy Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="my-5">
          <div className="h4 font-weight-bold">Informasi Produk</div>
          <div className="h5 font-weight-bold mt-4">Condition</div>
          <div className="h5 font-weight-bold text-danger">New</div>
          <div className="h5 font-weight-bold mt-4">Description</div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            Donec non magna rutrum, pellentesque augue eu, sagittis velit.Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
            Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.

            Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.

            In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
        </div>
        <div className="my-5">
          <div className="h4 font-weight-bold">Product Review</div>
          <div className="mt-4">
            <Row>
              <Col md={5}>
                <Row>
                  <Col md={4} className="d-flex flex-column justify-content-center">
                    <div className="display-4">
                      5.0
                      <small className="h5 text-muted">/10</small>
                    </div>
                    <div>Star</div>
                  </Col>
                  <Col md={8}>
                    <Row>
                      <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                        <div>5</div>
                        <div>4</div>
                        <div>3</div>
                        <div>2</div>
                        <div>1</div>
                      </Col>
                      <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                        <div className="text-muted">5</div>
                        <div className="text-muted">4</div>
                        <div className="text-muted">3</div>
                        <div className="text-muted">2</div>
                        <div className="text-muted">1</div>
                      </Col>
                      <Col md={7} className="d-flex flex-column justify-content-center align-items-center">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                      </Col>
                      <Col md={1} className="d-flex flex-column justify-content-center align-items-center">
                        <div className="text-muted">4</div>
                        <div className="text-muted">0</div>
                        <div className="text-muted">0</div>
                        <div className="text-muted">0</div>
                        <div className="text-muted">0</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
