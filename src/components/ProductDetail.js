// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../api';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart(); // Access the addToCart function from context
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.error(`Error fetching product with ID ${productId}:`, error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {/* ... Product details ... */}
      <button
        className="btn btn-primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
