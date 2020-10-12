/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import numeral from 'numeral';
import {
  Button, Col, Container, Row,
} from 'reactstrap';

import productAction from '../redux/actions/product';
import cartAction from '../redux/actions/cart';

import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Rating from '../components/StarRatings';

import product1 from '../assets/images/product1.svg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';

export default function ProductDetail(props) {
  const { id } = useParams();
  let results = {};
  const { isLogin, token } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction.getDetail(id));
  }, [dispatch, id]);
  if (data.length) {
    results = data[0];
  }

  const addCart = (idProduct) => {
    // const cart = {
    //   product_id: idProduct,
    //   quantity: 1,
    // };
    // if (isLogin) {
    //   console.log(cart);
    // } else {
    //   return <Link to="/login" />;
    // }
    // console.log;
  };
  return (
    <>
      {isLogin ? <Navbar2 /> : <Navbar1 />}
      <Container className="mt-4">
        <div>
          <span className="text-muted h6">{`Home > Category > ${results.category}`}</span>
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
            <span className="h4 font-weight-bold">{results.name}</span>
            <span className="h6 text-muted">{results.store}</span>
            <div>
              <Rating number={results.rating} />
            </div>
            <span className="h6 text-muted mt-4">Price</span>
            <span className="h4 font-weight-bold">
              Rp.
              {numeral(results.price).format(0, 0).toString().replace(',', '.')
                .replace(',', '.')}
            </span>
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
                    <Button onClick={() => addCart()} block className="btn-2 rounded-pill py-2">
                      Add cart
                    </Button>
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
          <div className="h5 font-weight-bold text-danger">{results.product_condition}</div>
          <div className="h5 font-weight-bold mt-4">Description</div>
          <p className="text-muted">
            {results.description}
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
                      {results.rating !== null ? parseFloat(results.rating).toFixed(1) : 0}
                      <small className="h5 text-muted">/10</small>
                    </div>
                    <div>
                      <Rating number={results.rating} />
                    </div>
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
