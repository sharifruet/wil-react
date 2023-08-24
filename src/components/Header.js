// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <Link to="/" className="text-white text-decoration-none">
          Wahidiya Bookshop
        </Link>
        <Link to="/cart" className="text-white ml-auto">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
