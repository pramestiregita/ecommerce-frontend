/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Alert,
  Button, Card, Col, Container, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row,
} from 'reactstrap';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa'
import '../assets/css/checkout.css'

import cartAction from '../redux/actions/cart';
import checkoutAction from '../redux/actions/checkout';

// importing components
import Navbar from '../components/Navbar2';
import CardCheckout from '../components/CardCheckout';

import shoppay from '../assets/images/logo.svg'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.auth.token,
      delivery: 10000,
      modalOpen: false,
      alertMsg: '',
      alertOpen: false
    };
  }

  componentDidMount() {
    this.props.getCart(this.state.token);
  }
  

  payment = () => {
    this.setState({
      modalOpen: true
    })
  }

  buy = () => {
    console.log('buy')
    this.props.buy(this.state.token)
    this.setState({
      modalOpen: false,
      alertOpen: true
    })
  }

  render() {
    const { data: cart, summary } = this.props.cart;
    const total = summary + this.state.delivery
    const { alertMsg } = this.props.checkout
    return (
      <>
        <Modal centered isOpen={this.state.modalOpen} style={{width: 450}}>
          <ModalHeader className='d-flex'>
            <Button onClick={()=>this.setState({modalOpen: false})}><FaTimes /></Button>
            <span className='ml-3 h4 font-weight-bold'>Payment</span>
          </ModalHeader>
          <ModalHeader>
            <div className='w-100'>
              <div className='small font-weight-bold'>Payment Method</div>
              <Row className='d-flex align-items-center w-100 m-0 mt-2'>
                <Col md={4}>
                  <div className='payment w-100'>
                    <img src={shoppay} alt='shoppay' />
                  </div>
                </Col>
                <Col md={6}>
                  <span className='h6 font-weight-bold'>ShopPay</span>
                </Col>
                <Col md={2} className='d-flex justify-content-center'>
                  <Input className='m-0 position-relative' type='checkbox' />
                </Col>
              </Row>
            </div>
          </ModalHeader>
          <ModalBody style={{height: 250}}>
            <div className='h6 font-weight-bold'>Shopping Summary</div>
            <Row>
              <Col md={6}>
                <span className='text-muted'>Order</span>
              </Col>
              <Col md={6} className='text-right'>
                <span className="h6 font-weight-bold">
                  Rp.
                  {numeral(summary).format(0, 0).toString().replace(',', '.')
                    .replace(',', '.')}
                </span>
              </Col>
              <Col md={6}>
                <span className='text-muted'>Delivery</span>
              </Col>
              <Col md={6} className='text-right'>
                <span className="h6 font-weight-bold">
                  Rp.
                  {numeral(this.state.delivery).format(0, 0).toString().replace(',', '.')
                    .replace(',', '.')}
                </span>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Row className='w-100'>
              <Col md={6}>
                <div className='h6 font-weight-bold'>Shopping Summary</div>
                <div>
                  <span className="h5 font-weight-bold text-danger">
                    Rp.
                    {numeral(total).format(0, 0).toString().replace(',', '.')
                      .replace(',', '.')}
                  </span>
                </div>
              </Col>
              <Col md={6} className='d-flex align-items-center'>
                <Button onClick={()=>this.buy()} block className='btn-1 rounded-pill'>Buy</Button>
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
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
                        <span className="h6 font-weight-bold">
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
                        <span className="h6 font-weight-bold">
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
                      <span className="h6 font-weight-bold text-danger">
                        Rp.
                        {numeral(total).format(0, 0).toString().replace(',', '.')
                          .replace(',', '.')}
                      </span>
                    </div>
                    <div className="buy mt-3">
                      <Button onClick={() => this.payment()} className="btn-1 w-100 rounded-pill">Select Payment</Button>
                    </div>
                  </Container>
                </Card>
                <Alert isOpen={this.state.alertOpen}>{alertMsg}</Alert>
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
  checkout: state.checkout
});

const mapDispatchToProps = {
  getCart: cartAction.getCart,
  buy: checkoutAction.checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
