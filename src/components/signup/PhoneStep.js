import React, { useState } from 'react';
import { Container, Form, Button, Alert, FloatingLabel } from 'react-bootstrap';
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
    <div className="my-4">
      <Form  className="my-4">
        <FloatingLabel controlId="floatingInput" label="Phone number" className="mb-3">
          <Form.Control type="text" value={phoneNumber} placeholder="Enter your phone number" onChange={(e) => setPhoneNumber(e.target.value)}/>
        </FloatingLabel>
        {errorMessage.length>0 && <Alert variant='danger'>{errorMessage}</Alert>}
        <br/> 
        <Button variant='info' onClick={handleNext}>Next</Button>
      </Form>
    </div>
  );
};

export default PhoneStep;
