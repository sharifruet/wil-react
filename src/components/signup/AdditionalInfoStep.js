import React, { useState } from 'react';
import {Form, Button, Alert, FloatingLabel } from 'react-bootstrap';
import api from '../../api';

const AdditionalInfoStep = ({customer, onSignUp }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrormessage] = useState('');

  const handleSignUp = () => {
    // Perform signup logic here
    customer.name = name;
    customer.address = address;
    customer.password = password;

    if(password!=confirmPassword){
      setErrormessage("Passwords mismatch");
      return;
    }

    console.log(customer);

    api.signup(customer)
    .then( data => {
      onSignUp();//onNext(phoneNumber);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      setErrormessage(error?.response?.data?.message);
    });

  };

  return (
    <div className="my-4">
      {errorMessage.length>0 && <Alert variant='danger'>{errorMessage}</Alert>}
      <Form className="my-4">
        
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
          <Form.Control type="password" placeholder="Re-enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
          <Form.Control type="address" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
        </FloatingLabel>

        <br/>
        <Button variant='info' onClick={handleSignUp}>Sign Up</Button>
      </Form>
    </div>
  );
};

export default AdditionalInfoStep;
