// src/components/Signup.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import PhoneStep from './signup/PhoneStep';
import OtpStep from './signup/OtpStep';
import AdditionalInfoStep from './signup/AdditionalInfoStep';

const Signup = () => {
  const [step, setStep] = useState(1); // Initialize with step 1

  const handlePhoneStepComplete = () => {
    setStep(2); // Move to step 2 (OTP verification)
  };

  const handleOtpStepComplete = () => {
    setStep(3); // Move to step 3 (Additional information)
  };

  const handleSignUp = () => {
    // Perform signup logic here (submitting the form, etc.)
    // After successful signup, you might want to redirect the user to a different page
  };

  return (
    <Container>
        <h1 className="m-2 border-bottom border-info"> Sign Up </h1>
        {step === 1 && <PhoneStep onNext={handlePhoneStepComplete} />}
        {step === 2 && <OtpStep onNext={handleOtpStepComplete} />}
        {step === 3 && <AdditionalInfoStep onSignUp={handleSignUp} />}
    </Container>
  );
};

export default Signup;
