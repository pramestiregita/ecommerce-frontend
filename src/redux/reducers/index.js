import { combineReducers } from 'redux';

import auth from './auth';
import product from './product';
import profile from './profile';
import cart from './cart';
import checkout from './checkout';

export default combineReducers({
  auth,
  product,
  profile,
  cart,
  checkout,
});
