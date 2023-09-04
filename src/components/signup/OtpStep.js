import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import api from '../../api';

const OtpStep = ({ phoneNumber, onNext }) => {
  const [otp, setOtp] = useState('');
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
      });
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="otp">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter the OTP you received"
          />
        </Form.Group>
        <Button onClick={handleNext}>Next</Button>
      </Form>
    </div>
  );
};

export default OtpStep;
