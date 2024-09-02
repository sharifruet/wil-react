import React, { useContext } from 'react';
import OrderItem from './OrderItem';
import { Button, Card, Col, Container, Form, ListGroup, Row, Toast } from 'react-bootstrap';
import GlobalContext from '../GlobalContext'; // Import GlobalContext

const Order = () => {
  const { order, clearCart, addToCart, removeFromCart, loggedIn, setShowLogin, setOrder } = useContext(GlobalContext); // Access cart-related functions from GlobalContext

  const totalItems = order.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = order.reduce((total, item) => total + item.quantity * item.salePrice, 0);


  const saveOrder = () =>{
    if(!loggedIn){
      setShowLogin(true);
    }

  }

  return (
    <Container>
      <h1 className="m-2 border-bottom border-info"> Order </h1>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          
          <Col md={8}>
            <h3>Payment Options</h3>
            <ListGroup>
              <ListGroup.Item>
                <Form.Check label="bKash" name="paymentOption" type="radio" id="paymentBkash" />
                <p>Please make payment to merchant account 01XXXXXXXXX</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check label="Nagad"  name="paymentOption" type="radio" id="paymentCod" />
                <p>Please make payment to merchant account 01XXXXXXXXX</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check label="Cash-on-Delivery (COD)" name="paymentOption" type="radio" id="paymentCod" />
                <p>Please make payment to merchant account 01XXXXXXXXX</p>
              </ListGroup.Item>
            </ListGroup>
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
                <Button className='m-1' variant="info" onClick={saveOrder}>Place Order</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Order;
