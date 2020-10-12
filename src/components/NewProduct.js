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
      newest,
    } = this.props.product;
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
            {newest.map((item, i) => (
              <Col className="m-2" xs="12" md={{ size: 2, offset: ((i + 5) % 5 === 0 ? 1 : 0) }}>
                <Link to={`product/detail/${item.id}`}>
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
  getProduct: productAction.getNew,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
