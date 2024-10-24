import React, { useRef, useState } from 'react';

const CustomFormSubmission = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;

    if (nameValue === '' || emailValue === '') {
      setErrorMessage('Both fields are required');
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setErrorMessage('Invalid email format');
    } else {
      // Custom form data processing
      setErrorMessage('');
      setFormData({ name: nameValue, email: emailValue });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={nameRef} type="text" placeholder="Enter name" />
        </div>
        <div>
          <input ref={emailRef} type="email" placeholder="Enter email" />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default CustomFormSubmission;
