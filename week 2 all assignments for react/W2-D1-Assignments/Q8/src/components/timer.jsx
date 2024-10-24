import React, { useEffect, useState } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up the timer when the component mounts
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // Increment the seconds count every second

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div>
      <h1>Timer</h1>
      <p>Elapsed time: {seconds} seconds</p>
    </div>
  );
}

export default TimerComponent;
