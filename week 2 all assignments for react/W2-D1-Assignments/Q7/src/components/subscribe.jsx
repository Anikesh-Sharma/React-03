import React, { useEffect, useState } from 'react';

function MouseMovementComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler for mouse movement
    const handleMouseMove = event => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log('Mouse position:', event.clientX, event.clientY);
    };

    // Subscribe to the mousemove event
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to add event listener once, when the component mounts

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseMovementComponent;
