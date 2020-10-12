import http from '../../helpers/http';

export default {
  addCart: (token) => ({
    type: 'CHECKOUT',
    payload: http(token).post('customer/checkout'),
  }),
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('customer/cart'),
  }),
};
