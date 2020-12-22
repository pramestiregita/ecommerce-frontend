/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing components
import React from 'react';
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
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
          <Route path="/product/detail/:id" component={Product} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="/category" component={Category} />
          <Route path="/items" component={Items} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
