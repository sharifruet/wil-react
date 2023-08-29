// src/components/CartItem.js
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <Row className="cart-item">
      <Col>
        <img src={'/images/'+item.photo} width={150} alt={item.itemName} />
      </Col>
      <Col>
        <h4>{item.itemName}</h4>
        <h6>লেখকঃ {item.af1.authorName}</h6>
        <h6>প্রকাশনীঃ {item.af1.publisherName}</h6>
        <p>দর: {item.salePrice} টাকা</p>
        <p>পরিমান: {item.quantity}</p>
        <p>মোট দাম: {item.quantity*item.salePrice} টাকা</p>
        <Button onClick={() => removeFromCart(item.componentId)}>Remove</Button>
      </Col>
    </Row>
    
  );
};

export default CartItem;
