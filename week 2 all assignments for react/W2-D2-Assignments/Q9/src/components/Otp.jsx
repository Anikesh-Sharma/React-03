import React, { useState, useRef, useEffect } from 'react';
import './OtpInput.css'; // Import CSS for styling

const OTPInput = () => {
  const [otp, setOtp] = useState(Array(6).fill('')); // Initial OTP state
  const inputRefs = useRef([]);

  // Handle input changes
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) { // Validate single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      // If not a valid digit, clear the input
      e.target.value = '';
    }
  };

  // Handle keydown events (for backspace)
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      // Move to the previous input field
      if (index > 0 && otp[index] === '') {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle paste event
  const handlePaste = (e, index) => {
    const pasteData = e.clipboardData.getData('text');
    console.log(pasteData);
    const digits = pasteData.split('').slice(0, otp.length - index);

    const newOtp = [...otp];
    digits.forEach((digit, i) => {
      if (/^[0-9]$/.test(digit)) {
        newOtp[index + i] = digit;
      }
    });
    setOtp(newOtp);

    // Focus on the next available input field
    const focusIndex = Math.min(index + digits.length, otp.length - 1);
    inputRefs.current[focusIndex].focus();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP Submitted: ${otp.join('')}`);
  };

  // Check if all OTP boxes are filled
  const isSubmitDisabled = otp.some(digit => digit === '');

  return (
    <div className="otp-container">
      <form onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            maxLength="1"
            ref={el => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            className="otp-input"
          />
        ))}
        <button type="submit" disabled={isSubmitDisabled} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTPInput;
