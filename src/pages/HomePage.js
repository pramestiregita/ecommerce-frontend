/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { useSelector } from 'react-redux';
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

export default function HomePage(props) {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <>
      {isLogin ? <Navbar2 /> : <Navbar1 {...props} />}
      <Container className="mb-5">
        <CarouselComp />
        <CategorySlide />
        <NewProduct />
        <PopularProduct />
      </Container>
    </>
  );
}
