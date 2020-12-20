/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing components
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Address from './pages/Address';

import authAction from './redux/actions/auth';

export class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.setToken(localStorage.getItem('token'));
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/my-cart">
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/my-profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/my-address">
              <Address />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <Route path="/product/detail/:id" component={Product} />
            <Route path="/home" component={Home} exact />
            <Route path="/category" component={Category} />
            <Route path="/items" component={Items} />
            <Route path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  setToken: authAction.setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
