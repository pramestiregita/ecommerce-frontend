/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col,
} from 'reactstrap';

import productAction from '../redux/actions/product';

// import component
import CardItem from './CardItem';

class NewProduct extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const {
      popular,
    } = this.props.product;
    return (
      <>
        <Container className="mt-3">
          <div>
            <span className="h2 font-weight-bold">Popular</span>
          </div>
          <div>
            <span className="text-muted h6 small">Find that are trending recently</span>
          </div>
          <Row className="d-flex justify-content-between no-gutters">
            {popular.map((item) => (
              <Col className="m-2" xs="12" lg={{ size: 2, offset: 1 }}>
                <Link className="card-product" to={`product/detail/${item.id}`}>
                  <CardItem
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    store={item.store}
                    ratings={item.rating}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  getProduct: productAction.getPopular,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
