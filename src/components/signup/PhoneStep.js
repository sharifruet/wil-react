import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import api from '../../api';

const PhoneStep = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    api.getOtpInSignup(phoneNumber)
    .then( data => {
      onNext(phoneNumber);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
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
        <Button variant='info' onClick={handleNext}>Next</Button>
      </Form>
    </div>
  );
};

export default PhoneStep;
