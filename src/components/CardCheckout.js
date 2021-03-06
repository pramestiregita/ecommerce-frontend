/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../assets/css/cart.css';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Container, Row,
} from 'reactstrap';
import numeral from 'numeral';

// importing images
import item from '../assets/images/item.jpg';

export default function CardCart(props) {
  return (
    <>
      <Card body className="shadow mt-3">
        <Container>
          <Row className="no-gutters">
            <Col md={9} className="product d-flex align-items-center">
              <Link to="/product/detail">
                <img style={{ width: 70, height: 69 }} src={item} alt="product picture" />
              </Link>
              <div className="ml-3 d-flex flex-column">
                <Link className="card-link" to="/product/detail">
                  <span className="h6 font-weight-bold">{props.name}</span>
                </Link>
                <Link className="card-link ml-0" to="/store">
                  <small className="font-weight-bold text-muted">{props.store}</small>
                </Link>
              </div>
            </Col>
            <Col md={3} className="price d-flex align-items-center justify-content-end">
              <span className="h6 font-weight-bold m-0">
                Rp.
                {numeral(props.price).format(0, 0).toString().replace(',', '.')
                  .replace(',', '.')}
              </span>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
