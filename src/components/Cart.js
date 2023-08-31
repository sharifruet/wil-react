// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.salePrice, 0);

  return (
    <Container>
      <h1 className="m-2 border-bottom border-info">কার্ট</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          <Col>
            {cartItems.map(item => (
              <CartItem
                key={item.componentId}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </Col>
          <Col>

            <p>Total Items: {totalItems}</p>
            <p>Total Amount: {totalAmount} টাকা</p>

            <Button className='m-1' variant="warning" onClick={clearCart}>Clear Cart</Button>
            <Button className='m-1' variant="info" >Proceed to Order</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
