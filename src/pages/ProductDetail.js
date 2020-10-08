/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';

export default function ProductDetail() {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <>
      {isLogin ? <Navbar2 /> : <Navbar1 />}
    </>
  );
}
