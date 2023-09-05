import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import api from '../../api';

const PhoneStep = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrormessage] = useState('');

  const handleNext = () => {
    api.getOtpInSignup(phoneNumber)
    .then( data => {
      onNext(phoneNumber);
    })
    .catch(error => {
      
      console.error('Error fetching products:', error);
      setErrormessage(error.response.data.message);
    });
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Enter Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </Form.Group>
        {errorMessage.length>0 && <Alert variant='danger'>{errorMessage}</Alert>}
        <Button variant='info' onClick={handleNext}>Next</Button>
      </Form>
    </div>
  );
};

export default PhoneStep;
