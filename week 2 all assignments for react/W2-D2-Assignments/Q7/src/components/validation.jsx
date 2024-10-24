import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const usernameRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    const value = usernameRef.current.value;
    if (value.length < 5) {
      setErrorMessage('Username must be at least 5 characters long');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <input
        ref={usernameRef}
        type="text"
        placeholder="Enter username"
        onChange={validateInput}
      />
      <p style={{ color: errorMessage ? 'red' : 'green' }}>
        {errorMessage ? errorMessage : 'Username is valid'}
      </p>
    </div>
  );
};

export default RealTimeValidationForm;
