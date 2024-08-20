import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { Button, Card, Container, Row, Col, Stack, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import GlobalContext from '../GlobalContext'; // Import GlobalContext


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const {addToCart, items} = useContext(GlobalContext); // Access addToCart from GlobalContext

  const searchTextHandle = (val) => {
    
  }

  /*
  useEffect(() => {
    api.getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
*/
  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart with the selected product
  };

  return (
    <Container>
      <Row className='my-2 p-2'>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control id="ProductListSearch" onKeyUp={e=>searchTextHandle(e.target.value)} aria-label="Amount (to the nearest dollar)" />
          </InputGroup>
        </Col>
      </Row>
      <Row>
      {items.map(product => (
        <Col md={3} key={product.componentId} className='mt-2'>
          <Card>
            <Card.Img variant="top" src={'/images/' + product.photo} />
            <Card.Body>
              <Card.Title>{product.itemName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.itemName}</Card.Subtitle>
              <Stack direction="horizontal" gap={3}>
                <div className="p-2 text-danger" style={{"text-decoration": "line-through"}}> ৳ {product.salePrice} </div>
                <div className="p-2 text-info"> ৳ {product.salePrice} </div>
                <div className="p-2">
                    <Button variant='outline-info' onClick={() => handleAddToCart(product)}>
                      <FaCartPlus size={24} className="text-primary" />
                  </Button>
                </div>
              </Stack>
              <Card.Text>
                
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
       ))}
      </Row>
    </Container>
  );
};

export default ProductList;
