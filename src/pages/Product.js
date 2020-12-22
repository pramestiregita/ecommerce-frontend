/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {
  Button, Col, Container, Modal, ModalBody, Row,
} from 'reactstrap';

import productAction from '../redux/actions/product';
import cartAction from '../redux/actions/cart';

import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Rating from '../components/StarRatings';

import yellow from '../assets/images/star-yellow.svg';

import '../assets/css/style.css'
const { REACT_APP_BACKEND_URL } = process.env;

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      token: this.props.auth.token,
      data: {},
      quantity: 1
    };
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  addCart = (productId) => {
    const cart = {
      productId,
      quantity: this.state.quantity
    }
    if (this.props.auth.isLogin === false) {
      const location = {
        pathname: '/login',
        state: {
          location: this.props.location.pathname
        }
      }
      this.props.history.replace(location)
    } else {
      this.props.addCart(this.state.token, cart)
      setTimeout(()=>{
        this.props.clearMsg()
      },2000)
    }
  }

  render() {
    const { isLogin } = this.props.auth;
    const { data } = this.props.product;
    const { alertMsg } = this.props.cart
    let results = {};
    if (data.length) {
      results = data[0];
    }
    return (
      <>
        {isLogin ? <Navbar2 /> : <Navbar1 />}
        <Container className="mt-4">
          <Modal centered isOpen={alertMsg !== ''}>
            <ModalBody className='text-center'>
              {alertMsg}
            </ModalBody>
          </Modal>
          <div>
            <span className="text-muted h6">{`Home > Category > ${results.category}`}</span>
          </div>
          <Row className="my-3">
            <Col md={6}>
              <img width="100%" src={REACT_APP_BACKEND_URL.concat(results.image)} alt="..." />
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
              {results.color?(
                <>
                  <span className="mt-4">Color</span>
                  <div>colors</div>
                </>
              ):null}
              <Row className="mt-4">
                <Col md={7}>
                  <Row>
                    {results.size?(
                      <Col md={6}>
                        <span>Size</span>
                      </Col>
                    ):null}
                    <Col md={6}>
                      <span>Jumlah</span>
                      <div className='d-flex justify-content-between align-items-center mt-3'>
                        <Button onClick={()=>this.state.quantity>1&&
                          this.setState({quantity:this.state.quantity-1})} className='btn-q rounded-circle shadow'>
                            <span className='btn-text'>-</span>
                        </Button>
                        <div>
                          <span>{this.state.quantity}</span>
                        </div>
                        <Button onClick={()=>this.state.quantity<results.quantity&&
                          this.setState({quantity:this.state.quantity+1})} className='btn-q rounded-circle shadow'>
                            <span className='btn-text'>+</span>
                        </Button>
                      </div>
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
                      <Button onClick={()=>this.addCart(results.id)} block className="btn-2 rounded-pill py-2">
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
            <p className="text-muted des">
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
                          <div className="text-muted">
                            <img src={yellow} alt='star'/>
                          </div>
                          <div className="text-muted">
                            <img src={yellow} alt='star'/>
                          </div>
                          <div className="text-muted">
                            <img src={yellow} alt='star'/>
                          </div>
                          <div className="text-muted">
                            <img src={yellow} alt='star'/>
                          </div>
                          <div className="text-muted">
                            <img src={yellow} alt='star'/>
                          </div>
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
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
  cart: state.cart
});

const mapDispatchToProps = {
  getProduct: productAction.getDetail,
  addCart: cartAction.addCart,
  clearMsg: cartAction.clearMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
// export default Product;
