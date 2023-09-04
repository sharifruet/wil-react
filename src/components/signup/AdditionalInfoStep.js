import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import api from '../../api';

const AdditionalInfoStep = ({customer, onSignUp }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Perform signup logic here
    customer.name = name;
    customer.address = address;
    customer.password = password;

    if(password!=confirmPassword){
      alert("Passwords mismatch");
      return;
    }

    console.log(customer);

    api.signup(customer)
    .then( data => {
      onSignUp();//onNext(phoneNumber);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });

  };

  return (
    <div>
      <Form>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />
        </Form.Group>

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
