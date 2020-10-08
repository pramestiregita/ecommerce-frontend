/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';

// importing components
import Navbar from '../components/NavigationBar';
import GetCategory from '../components/GetCategory';

export default function Category() {
  return (
    <>
      <Navbar />
      <GetCategory />
    </>
  );
}
