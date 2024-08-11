import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import api from '../../api';

const OtpStep = ({ phoneNumber, onNext }) => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrormessage] = useState('');
  //const [customer, setCustomer] = useState({});

  const handleNext = () => {
    api.verifyOtp(otp, phoneNumber)
      .then( data => {
        console.log(data.data[0]);
        //setCustomer(data.data[0]);
        //console.log(customer);
        onNext(data.data[0]);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setErrormessage(error.response.data.message);
      });
  };

  return (
    <div className="my-4">
      <Form className="my-4">
        <Form.Group controlId="otp">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP you received"
          />
        </Form.Group>
        {errorMessage.length>0 && <Alert variant='danger'>{errorMessage}</Alert>}
        <br/>
        <Button onClick={handleNext}>Next</Button>
      </Form>
    </div>
  );
};

export default OtpStep;
