/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'reactstrap';

// import component
import CardItem from './CardItem';

export default function NewProduct() {
  return (
    <>
      <Container className="mt-3">
        <div>
          <span className="h2 font-weight-bold">New</span>
        </div>
        <div>
          <span className="text-muted h6 small">You've never seen it before!</span>
        </div>
        <Row className="d-flex justify-content-between no-gutters">
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <Link className="card-product" to="/product/detail/">
              <CardItem />
            </Link>
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
          <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
            <CardItem />
          </Col>
        </Row>
      </Container>
    </>
  );
}
