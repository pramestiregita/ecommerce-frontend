/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../assets/css/cart.css';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Col,
  Container, Form, Input, Label, Row,
} from 'reactstrap';

// importing components
import Navbar from '../components/Navbar2';

// importing images
import item from '../assets/images/item.jpg';
import minus from '../assets/images/minus.svg';
import plus from '../assets/images/plus.svg';

export default function Cart() {
  return (
    <>
      <Navbar />
      <Container className="my-5 d-flex flex-column">
        <div>
          <span className="h1 font-weight-bold pl-0">My Cart</span>
        </div>
        <div className="item-wrapper">
          <Row className="mt-3">
            <Col md="8">
              <Card body className="shadow">
                <Container>
                  <Form className="d-flex align-items-center">
                    <div>
                      <Input type="checkbox" name="checkbox" />
                      <Label for="checkbox" className="m-0 ml-3">
                        Select all items
                        <small className="text-muted">(2 items selected)</small>
                      </Label>
                    </div>
                    <div className="flex-grow-1 text-right">
                      <Button type="reset" className="delete rounded-pill">
                        <span className="m-0 font-weight-bold">Delete</span>
                      </Button>
                    </div>
                  </Form>
                </Container>
              </Card>
              <Card body className="shadow mt-3">
                <Container className="d-flex align-items-center">
                  <Input className="my-0" type="checkbox" name="checkbox" aria-label="check" />
                  <div className="product ml-3 flex-grow-1 d-flex align-items-center">
                    <Link to="/product/detail">
                      <img style={{ width: 70, height: 69 }} src={item} alt="product picture" />
                    </Link>
                    <div className="ml-3 d-flex flex-column">
                      <Link className="card-link" to="/product/detail">
                        <span className="h6 font-weight-bold">Men's formal suit - Black</span>
                      </Link>
                      <Link className="card-link ml-0" to="/store">
                        <small className="font-weight-bold text-muted">Zalora Cloth</small>
                      </Link>
                    </div>
                  </div>
                  <div className="total col-3 w-100 d-flex align-items-center justify-content-between">
                    <div className="min">
                      <Button className="rounded-circle" aria-label="min">
                        <img src={minus} alt="minus" width="14px" height="2px" />
                      </Button>
                    </div>
                    <div className="amount">
                      <span>1</span>
                    </div>
                    <div className="plus">
                      <Button className="rounded-circle" aria-label="plus">
                        <img src={plus} alt="plus" width="14px" height="14px" />
                      </Button>
                    </div>
                  </div>
                  <div className="col-2 price 2 text-right">
                    <span className="h6 font-weight-bold">$ 20.0</span>
                  </div>
                </Container>
              </Card>
              <Card body className="shadow mt-3">
                <Container className="d-flex align-items-center">
                  <Input className="my-0" type="checkbox" name="checkbox" aria-label="check" />
                  <div className="product ml-3 flex-grow-1 d-flex align-items-center">
                    <Link to="/product/detail">
                      <img style={{ width: 70, height: 69 }} src={item} alt="product picture" />
                    </Link>
                    <div className="ml-3 d-flex flex-column">
                      <Link className="card-link" to="/product/detail">
                        <span className="h6 font-weight-bold">Men's formal suit - Black</span>
                      </Link>
                      <Link className="card-link ml-0" to="/store">
                        <small className="font-weight-bold text-muted">Zalora Cloth</small>
                      </Link>
                    </div>
                  </div>
                  <div className="total col-3 w-100 d-flex align-items-center justify-content-between">
                    <div className="min">
                      <Button className="rounded-circle" aria-label="min">
                        <img src={minus} alt="minus" width="14px" height="2px" />
                      </Button>
                    </div>
                    <div className="amount">
                      <span>1</span>
                    </div>
                    <div className="plus">
                      <Button className="rounded-circle" aria-label="plus">
                        <img src={plus} alt="plus" width="14px" height="14px" />
                      </Button>
                    </div>
                  </div>
                  <div className="col-2 price 2 text-right">
                    <span className="h6 font-weight-bold">$ 20.0</span>
                  </div>
                </Container>
              </Card>
            </Col>
            <Col md="4">
              <Card body className="shadow">
                <Container className="d-flex justify-content-center flex-column">
                  <div className="title">
                    <span className="h6 font-weight-bold">Shopping Summary</span>
                  </div>
                  <div className="price mt-2 d-flex justify-content-between">
                    <div>
                      <span>Total price</span>
                    </div>
                    <div>
                      <span className="h5 font-weight-bold">$ 40.0</span>
                    </div>
                  </div>
                  <div className="buy mt-3">
                    <Button className="btn-1 w-100 rounded-pill">Buy</Button>
                  </div>
                </Container>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
