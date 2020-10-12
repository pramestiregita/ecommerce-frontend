/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import productAction from '../redux/actions/product';

class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }

  render() {
    const {
      isLoading, data, isError, alertMsg,
    } = this.props.product;
    return (
      <div>
        {!isLoading && !isError && data.length !== 0 && data.map((item) => (
          <>
            <div>{item.price}</div>
          </>
        ))}
        {isLoading && !isError && (
          <div>Loading</div>
        )}
        {isError && alertMsg !== '' && (
          <div>{alertMsg}</div>
        )}
        {/* {this.props.product} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  getProduct: productAction.getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
