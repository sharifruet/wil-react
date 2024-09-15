import React, { useContext, useState } from 'react';
import OrderItem from './OrderItem';
import { Button, Card, Col, Container, Form, ListGroup, Row, Toast } from 'react-bootstrap';
import GlobalContext from '../GlobalContext'; // Import GlobalContext
import api from '../api';

const Order = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const { order, clearCart, addToCart, removeFromCart, loggedIn, setShowLogin, setOrder, accessToken, user } = useContext(GlobalContext); // Access cart-related functions from GlobalContext

  const totalItems = order.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = order.reduce((total, item) => total + item.quantity * item.salePrice, 0);


  const prepareOrder = ()=>{
    const currentDate = new Date().toISOString();

    let orderToSave = {
      "order": {
        "description": "eComm Order",
        "tdate": currentDate,
        "type": "Online",
        "orderStatus": "Pending",
        "userId": 2,
        "status": 1,
        "createdby": 1,
        "companyId": 1
      },
      "orderDetails": [
        {
          "itemId": 103,
          "orderQuantity": 5,
          "unitPrice": 75.00,
          "deliveredQuantity": 0,
          "newReceiveQuantity": 5
        }
      ]
    };

    return orderToSave;

  }

  const saveOrder = () =>{
    if(!loggedIn){
      setShowLogin(true);

      return;
    }

    const orderObject = prepareOrder();
    orderObject.order.userId = user.componentId;

    orderObject.orderDetails = order.map(item => {return {itemId: item.componentId, orderQuantity: item.quantity}});

    console.log(orderObject);

    
    api.saveOrder(orderObject, accessToken)
      .then(data => {
        setSuccess(true);
      })
      .catch(error => {
        console.error('Error in save order:', error);
        setFailed(true);
      });
      //Toast.success("Order saved");
      
  }

  return (
    <Container>
      <Row>
        <Col>
          <Toast bg="success" show={success} onClose={e=>{setSuccess(false)}}>
            <Toast.Header>
              <strong className="me-auto">Save Order</strong>
            </Toast.Header>
            <Toast.Body className='success'>Order place successful!!</Toast.Body>
          </Toast>
          <Toast bg="danger" show={failed} onClose={e=>{setFailed(false)}}>
            <Toast.Header>
              <strong className="me-auto">Save Order</strong>
            </Toast.Header>
            <Toast.Body className='danger'>Order place failed</Toast.Body>
          </Toast>
        </Col>
      </Row>

      <h1 className="m-2 border-bottom border-info"> Order </h1>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          
          <Col md={8}>
            <h3>Shipping Address</h3><hr/>
            
            <br/><br/>
            <h3>Payment Options</h3><hr/>
            <ListGroup>
              <ListGroup.Item>
                <Form.Check label="bKash (make payment)" name="paymentOption" type="radio" id="paymentBkash" />
                <p>Please <b>make payment</b> to bKash merchant account number <b>01922589645</b></p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check label="bKash (send money)" name="paymentOption" type="radio" id="paymentBkash" />
                <p>Please <b>send money</b> to bKash personal account number <b>01708524525</b></p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check label="Nagad"  name="paymentOption" type="radio" id="paymentCod" />
                <p>Please <b>send money</b> to Nagad personal account number 01708524525</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check label="Cash-on-Delivery (COD)" name="paymentOption" type="radio" id="paymentCod" />
                <p>Pay to delivery man / courier agent at the time of product receive</p>
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
