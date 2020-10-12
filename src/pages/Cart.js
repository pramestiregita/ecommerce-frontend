/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../assets/css/cart.css';
import {
  Button,
  Card,
  Col,
  Container, Form, Input, Label, Row,
} from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';
import cartAction from '../redux/actions/cart';

// importing components
import Navbar from '../components/Navbar2';
import CardCart from '../components/CardCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.auth.token,
    };
  }

  componentDidMount() {
    this.props.getCart(this.state.token);
  }

  render() {
    const { data: cart, summary } = this.props.cart;
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
                {cart.map((item) => (
                  <CardCart
                    name={item.name}
                    store={item.store}
                    quantity={item.quantity}
                    price={item.price}
                  />
                ))}
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
                        <span className="h5 font-weight-bold">
                          Rp.
                          {numeral(summary).format(0, 0).toString().replace(',', '.')
                            .replace(',', '.')}
                        </span>
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
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

const mapDispatchToProps = {
  getCart: cartAction.getCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
