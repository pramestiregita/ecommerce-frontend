/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';

// importing components
import Navbar from '../components/NavigationBar';
import GetUsers from '../components/GetUsers';

export default function Users() {
  return (
    <>
      <Navbar />
      <GetUsers />
    </>
  );
}
