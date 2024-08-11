import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GlobalContext from '../GlobalContext'; // Import GlobalContext
import api from '../api';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(GlobalContext); // Access addToCart from GlobalContext
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
        onClick={() => addToCart(product)} // Add product to cart
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
