import React, { useState, useEffect } from 'react';
import api from '../api';
import { Button, Container } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { FaCartPlus } from 'react-icons/fa';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Access addToCart from CartContext

  useEffect(() => {
    api.getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart with the selected product
  };

  return (
    <Container>
      <div className="row">
        {products.map(product => (
          <div className="col-md-2 mt-2 mb-2" key={product.componentId}>
            <div className="card">
              <img src={'/images/'+product.photo} className="card-img-top" alt={product.uniqueCode} />
              <div className="card-body">
                <h6 className="card-title">{product.itemName}</h6>
                <p className="card-text">৳{product.salePrice}</p>
                <Button variant='outline-info' onClick={() => handleAddToCart(product)}><FaCartPlus size={24} className="text-primary" /></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
