import React, { useEffect, useState } from 'react';

function ScrollEventComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means the effect runs only on mount and unmount

  return (
    <div style={{ height: '150vh' }}> {/* Makes page scrollable */}
      <h1>Scroll Event</h1>
      <p>Scroll position: {scrollPosition}px</p>
    </div>
  );
}

export default ScrollEventComponent;
