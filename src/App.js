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
import ProductDetail from './pages/ProductDetail';

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
            <Route path="/product/detail" component={ProductDetail} />
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
