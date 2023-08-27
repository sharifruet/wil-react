// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import HomeSlider from './HomeSlider';

const HomePage = () => {
  return (
    <div className="container">
      <HomeSlider />
      <Link to="/products" className="btn btn-primary">
        Explore Books
      </Link>
      <ProductList/>
    </div>
  );
};

export default HomePage;
