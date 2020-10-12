/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Button,
  Card,
  Col,
  Container, Form, Row,
} from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';
import cartAction from '../redux/actions/cart';
import checkoutAction from '../redux/actions/checkout';

// importing components
import Navbar from '../components/Navbar2';
import CardCheckout from '../components/CardCheckout';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.auth.token,
      delivery: 10000,
    };
  }

  componentDidMount() {
    this.props.getCart(this.state.token);
  }

  buy = () => {
    console.log(this.state.token)
    this.props.addCart(this.state.token)
  }

  render() {
    const { data: cart, summary } = this.props.cart;
    return (
      <>
        <Navbar />
        <Container className="my-5 d-flex flex-column">
          <div>
            <span className="h1 font-weight-bold pl-0">Checkout</span>
          </div>
          <div className="item-wrapper">
            <Row className="mt-3">
              <Col md="8">
                <div className="subtitle">
                  <span className="font-weight-bold">Shipping Address</span>
                </div>
                <Card body className="shadow rounded-lg my-2">
                  <Container>
                    <Form className="d-flex flex-column justify-content-center">
                      <div className="name">
                        <span className="font-weight-bold">Andreas Jane</span>
                      </div>
                      <div className="address my-3">
                        <p className="m-0">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                      </div>
                      <div className="change-add">
                        <Button className="btn-2 rounded-pill">Choose another address</Button>
                      </div>
                    </Form>
                  </Container>
                </Card>
                {cart.map((item) => (
                  <CardCheckout
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
                        <span>Order</span>
                      </div>
                      <div>
                        <span className="h5 font-weight-bold">
                          Rp.
                          {numeral(summary).format(0, 0).toString().replace(',', '.')
                            .replace(',', '.')}
                        </span>
                      </div>
                    </div>
                    <div className="delivery mt-2 d-flex justify-content-between">
                      <div>
                        <span>Delivery</span>
                      </div>
                      <div>
                        <span className="h5 font-weight-bold">
                          Rp.
                          {numeral(this.state.delivery).format(0, 0).toString().replace(',', '.')
                            .replace(',', '.')}
                        </span>
                      </div>
                    </div>
                    <div width="100" className="my-3" style={{ backgroundColor: '#D4D4D4', height: 2 }}>&nbsp;</div>
                    <div className="summary mt-2 d-flex justify-content-between">
                      <span>Shopping Summary</span>
                    </div>
                    <div className="mt-2 d-flex justify-content-end">
                      <span className="h5 font-weight-bold">
                        Rp.
                        {numeral(summary + this.state.delivery).format(0, 0).toString().replace(',', '.')
                          .replace(',', '.')}
                      </span>
                    </div>
                    <div className="buy mt-3">
                      <Button onClick={() => this.buy()} className="btn-1 w-100 rounded-pill">Buy</Button>
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
  addCart: checkoutAction.addCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
