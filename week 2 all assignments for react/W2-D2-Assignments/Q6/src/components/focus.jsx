import React, { useRef, useEffect } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I will be focused automatically" />
    </div>
  );
};

export default FocusableInput;
