// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
      <Container>
        <h1 className="m-2 border-bottom border-info">কার্ট</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Row>
            <Col>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </Col>
            <Col>
              <Button className='m-2' onClick={clearCart}>Clear Cart</Button>
              <Button className='m-2'>Proceed to Order</Button>
            </Col>
          </Row>
      )}
    
    </Container>
  );
};

export default Cart;
