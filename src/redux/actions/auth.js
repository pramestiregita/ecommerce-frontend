import qs from 'querystring';
import http from '../../helpers/http';

export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: http().post('auth/login/customer', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT_USER',
  }),
  register: (data) => ({
    type: 'SIGN_UP',
    payload: http().post('auth/register/customer', qs.stringify(data)),
  }),
  setToken: (payload) => ({
    type: 'SET_TOKEN',
    payload,
  }),
};
