import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaMinus, FaPlus } from 'react-icons/fa';
import GlobalContext from '../GlobalContext'; // Import GlobalContext

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(GlobalContext); // Access functions from GlobalContext

  return (
    <Row className="cart-item mb-2">
      <Col md={3}>
        <img src={'/images/' + item.photo} width={150} alt={item.itemName} />
      </Col>
      <Col md={9}>
        <h4>{item.itemName}</h4>
        <h6>লেখকঃ {item.af1.authorName}</h6>
        <h6>প্রকাশনীঃ {item.af1.publisherName}</h6>
        <p className="m-0">দর: {item.salePrice} টাকা</p>
        <p className="m-0">
          পরিমান: 
          
          <span>  {item.quantity}  </span>
          <FaPlus onClick={() => addToCart(item)}/> 
          <FaMinus onClick={() => removeFromCart(item.componentId)}/> 
        </p>
        <p className="m-0">মোট দাম: {item.quantity * item.salePrice} টাকা</p>
        <Button variant="danger" onClick={() => removeFromCart(item.componentId)}>Remove</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
