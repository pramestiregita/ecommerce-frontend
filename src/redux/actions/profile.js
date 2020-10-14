import qs from 'querystring';
import http from '../../helpers/http';

export default {
  getProfile: (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('customer/detail'),
  }),
  editProfile: (token, data) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('customer/edit', qs.stringify(data)),
  }),
  editPict: (token, data) => ({
    type: 'EDIT_PICT',
    payload: http(token).patch('customer/edit/avatar', data),
  }),
};
