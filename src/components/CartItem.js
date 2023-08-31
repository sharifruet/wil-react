import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Import the useCart hook

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Use the useCart hook to access cart functions

  return (
    <Row className="cart-item">
      <Col>
        <img src={'/images/' + item.photo} width={150} alt={item.itemName} />
      </Col>
      <Col>
        <h4>{item.itemName}</h4>
        <h6>লেখকঃ {item.af1.authorName}</h6>
        <h6>প্রকাশনীঃ {item.af1.publisherName}</h6>
        <p className="m-0">দর: {item.salePrice} টাকা</p>
        <p className="m-0">
          পরিমান: <Button variant="outline-info" onClick={() => decreaseQuantity(item.componentId)}> <FaMinus /> </Button> {item.quantity} <Button variant="outline-info" onClick={() => increaseQuantity(item.componentId)}> <FaPlus /> </Button>
        </p>
        <p className="m-0">মোট দাম: {item.quantity * item.salePrice} টাকা</p>
        <Button variant="info" onClick={() => removeFromCart(item.componentId)}>Remove</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
