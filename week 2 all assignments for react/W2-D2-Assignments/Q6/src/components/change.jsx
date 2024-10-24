import React, { useRef } from 'react';

const ColorChangingDiv = () => {
  const divRef = useRef(null);

  const changeColor = () => {
    // Change background color on click
    divRef.current.style.backgroundColor = 
      divRef.current.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  };

  return (
    <div 
      ref={divRef} 
      onClick={changeColor} 
      style={{ width: '200px', height: '100px', backgroundColor: 'lightblue', cursor: 'pointer' }}
    >
      Click me to change color!
    </div>
  );
};

export default ColorChangingDiv;
