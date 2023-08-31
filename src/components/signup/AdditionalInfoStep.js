import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AdditionalInfoStep = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Perform signup logic here
    onSignUp();
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Button variant='info' onClick={handleSignUp}>Sign Up</Button>
      </Form>
    </div>
  );
};

export default AdditionalInfoStep;
