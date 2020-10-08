/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';

// importing components
import Navbar from '../components/NavigationBar';
import GetItems from '../components/GetItems';

export default function Items() {
  return (
    <>
      <Navbar />
      <GetItems />
    </>
  );
}
