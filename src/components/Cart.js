// src/components/Cart.js
import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      <h2>Your Cart</h2>
      {/* Display cart items here */}
      <p>Total: $X.XX</p>
      <button className="btn btn-primary">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
