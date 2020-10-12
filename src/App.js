/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

// importing components
import PrivateRoute from './components/PrivateRoute';

// importing pages
import Home from './pages/Home';
import Items from './pages/Items';
import Users from './pages/Users';
import Category from './pages/Category';
import HomePage from './pages/HomePage';
// eslint-disable-next-line import/no-named-as-default
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/my-cart">
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/my-profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            {/* <Route path="/checkout" component={Checkout} /> */}
            <Route path="/product/detail/:id" component={Product} />
            <Route path="/" component={Home} exact />
            <Route path="/category" component={Category} />
            <Route path="/items" component={Items} />
            <Route path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}
