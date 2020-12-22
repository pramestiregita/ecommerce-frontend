/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
} from 'reactstrap';

// importing components
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import CarouselComp from '../components/Carousel';
import CategorySlide from '../components/CategorySlide';
import NewProduct from '../components/NewProduct';
import PopularProduct from '../components/PopularProduct';

import profileAction from '../redux/actions/profile';

export default function HomePage() {
  const { isLogin, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, []);
  return (
    <>
      {isLogin ? <Navbar2 /> : <Navbar1 />}
      <Container className="mb-5">
        <CarouselComp />
        <CategorySlide />
        <NewProduct />
        <PopularProduct />
      </Container>
    </>
  );
}
