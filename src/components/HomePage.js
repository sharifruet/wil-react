// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Wahidiya Bookshop</h1>
      <p>Your one-stop shop for all things books!</p>
      <Link to="/products" className="btn btn-primary">
        Explore Books
      </Link>
    </div>
  );
};

export default HomePage;
