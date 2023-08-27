// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
      <h2>Our Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-2 mb-4" key={product.componentId}>
            <div className="card">
              <img src={'/images/'+product.photo} className="card-img-top" alt={product.uniqueCode} />
              <div className="card-body">
                <h5 className="card-title">{product.itemName}</h5>
                <p className="card-text">${product.salePrice}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
