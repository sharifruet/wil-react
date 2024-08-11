// src/components/Signup.js
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PhoneStep from './signup/PhoneStep';
import OtpStep from './signup/OtpStep';
import AdditionalInfoStep from './signup/AdditionalInfoStep';

const Signup = () => {
  const [step, setStep] = useState(1); // Initialize with step 1
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customer, setCustomer] = useState({});

  const handlePhoneStepComplete = (phone) => {
    setPhoneNumber(phone);
    setStep(2); // Move to step 2 (OTP verification)
  };

  const handleOtpStepComplete = (cust) => {
    setCustomer(cust);
    console.log(customer);
    setStep(3); // Move to step 3 (Additional information)
  };

  const handleSignUp = () => {
    // Perform signup logic here (submitting the form, etc.)
    // After successful signup, you might want to redirect the user to a different page
  };

  return (
    <Container>
      <Row my={2} className="justify-content-md-center">
        <Col md={4}>
          <h3>Sign Up ({step} / 3)</h3>
          <hr/>
          {step === 1 && <PhoneStep onNext={handlePhoneStepComplete} />}
          {step === 2 && <OtpStep phoneNumber={phoneNumber} onNext={handleOtpStepComplete} />}
          {step === 3 && <AdditionalInfoStep customer={customer} onSignUp={handleSignUp} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
