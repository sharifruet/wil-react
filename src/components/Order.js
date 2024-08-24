import React, { useContext } from 'react';
import OrderItem from './OrderItem';
import { Button, Card, Col, Container, Row, Toast } from 'react-bootstrap';
import GlobalContext from '../GlobalContext'; // Import GlobalContext

const Order = () => {
  const { cart, clearCart, addToCart, removeFromCart, loggedIn, setShowLogin, setOrder } = useContext(GlobalContext); // Access cart-related functions from GlobalContext

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.quantity * item.salePrice, 0);

  const placeOrder = () =>{
    if(!loggedIn){
      setShowLogin(true);
    }else{
      setOrder(cart);
      
    }

  }

  return (
    <Container>
      <h1 className="m-2 border-bottom border-info"> Order </h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          <Col md={8}>
            {cart.map(item => (
              <OrderItem
                key={item.componentId}
                item={item}
                increaseQuantity={() => addToCart(item)} // Increase quantity by adding to cart
                decreaseQuantity={() => removeFromCart(item.componentId)} // Decrease quantity or remove item
              />
            ))}
          </Col>
          <Col>

            <Card md={4}>
              <Card.Header>Order Summery</Card.Header>
              <Card.Body>
                <Card.Title>Order Summery</Card.Title>
                <Card.Text>
                  <p>Total Items: {totalItems}</p>
                  <p>Total Amount: {totalAmount} টাকা</p>
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Button className='m-1' variant="warning" onClick={clearCart}>Clear Order</Button>
                <Button className='m-1' variant="info" onClick={placeOrder}>Place Order</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Order;
