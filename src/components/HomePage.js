// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import HomeSlider from './HomeSlider';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      {/*<HomeSlider />*/}
      <ProductList/>
    </Container>
  );
};

export default HomePage;
