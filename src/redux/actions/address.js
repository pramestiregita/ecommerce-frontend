import qs from 'querystring';
import http from '../../helpers/http';

export default {
  getAddress: (token) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get('customer/my-address'),
  }),
  addAddress: (token, data) => ({
    type: 'ADD_ADDRESS',
    payload: http(token).post('customer/my-address', qs.stringify(data)),
  }),
};
