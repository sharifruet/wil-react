import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const OtpStep = ({ onNext }) => {
  const [otp, setOtp] = useState('');

  const handleNext = () => {
    // Perform OTP verification logic here
    onNext();
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
