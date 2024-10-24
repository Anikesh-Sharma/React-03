import React, { useRef } from 'react';

const DynamicFormFocus = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleFocus = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div>
        <input ref={input1Ref} type="text" placeholder="Input 1" />
        <button onClick={() => handleFocus(input1Ref)}>Focus Input 1</button>
      </div>
      <div>
        <input ref={input2Ref} type="text" placeholder="Input 2" />
        <button onClick={() => handleFocus(input2Ref)}>Focus Input 2</button>
      </div>
      <div>
        <input ref={input3Ref} type="text" placeholder="Input 3" />
        <button onClick={() => handleFocus(input3Ref)}>Focus Input 3</button>
      </div>
    </div>
  );
};

export default DynamicFormFocus;
