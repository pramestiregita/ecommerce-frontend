import qs from 'querystring';
import http from '../../helpers/http';

export default {
  addCart: (token, data) => ({
    type: 'ADD_CART',
    payload: http(token).post('customer/cart', qs.stringify(data)),
  }),
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('customer/cart'),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
