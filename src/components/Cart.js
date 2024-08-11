import React, { useContext } from 'react';
import CartItem from './CartItem';
import { Button, Col, Container, Row } from 'react-bootstrap';
import GlobalContext from '../GlobalContext'; // Import GlobalContext

const Cart = () => {
  const { cart, clearCart, addToCart, removeFromCart } = useContext(GlobalContext); // Access cart-related functions from GlobalContext

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.salePrice, 0);

  return (
    <Container>
      <h1 className="m-2 border-bottom border-info">কার্ট</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          <Col>
            {cart.map(item => (
              <CartItem
                key={item.componentId}
                item={item}
                increaseQuantity={() => addToCart(item)} // Increase quantity by adding to cart
                decreaseQuantity={() => removeFromCart(item.componentId)} // Decrease quantity or remove item
              />
            ))}
          </Col>
          <Col>
            <p>Total Items: {totalItems}</p>
            <p>Total Amount: {totalAmount} টাকা</p>

            <Button className='m-1' variant="warning" onClick={clearCart}>Clear Cart</Button>
            <Button className='m-1' variant="info">Proceed to Order</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
