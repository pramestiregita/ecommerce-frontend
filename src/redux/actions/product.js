/* eslint-disable import/no-named-default */
import http from '../../helpers/http';

export default {
  getNew: () => ({
    type: 'GET_NEW',
    payload: http().get('new?limit=15'),
  }),
  getPopular: () => ({
    type: 'GET_POPULAR',
    payload: http().get('popular?limit=15'),
  }),
  getDetail: (id) => ({
    type: 'GET_DATA',
    payload: http().get(`product/${id}`),
  }),
};
