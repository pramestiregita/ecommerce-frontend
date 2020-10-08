/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Route render={
      (props) => {
        const childWithProps = React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
          }
          return child;
        });
        if (isLogin) {
          return childWithProps;
        }
        return <Redirect to={{ pathname: '/login', state: { alert: 'Login first!', color: 'danger' } }} />;
      }
    }
    />
  );
}
