import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
    // Display the current value of the input field
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Type something..." 
        onChange={handleInput} 
      />
      <p>Current Value: {inputRef.current?.value}</p>
    </div>
  );
};

export default UncontrolledInput;
