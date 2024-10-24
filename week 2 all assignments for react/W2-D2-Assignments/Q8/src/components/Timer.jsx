import React, { useRef, useState, useEffect } from 'react';

const Timer = () => {
  // State for timer duration and remaining time
  const [remainingTime, setRemainingTime] = useState(60);
  const [notification, setNotification] = useState('');
  
  // Refs to manage mutable state
  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const progressBarRef = useRef(null);

  // Effect to handle timer interval updates
  useEffect(() => {
    if (remainingTime <= 0) {
      setNotification('Time is up!');
      handlePause(); // Pause the timer when time is up
    }
  }, [remainingTime]);

  // Start timer
  const handleStart = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setRemainingTime(prev => Math.max(prev - 1, 0));
      }, 1000);
    }
  };

  // Pause timer
  const handlePause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // Reset timer
  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRemainingTime(parseInt(inputRef.current.value, 10) || 0);
    setNotification('');
  };

  // Update duration
  const handleDurationChange = () => {
    setRemainingTime(parseInt(inputRef.current.value, 10) || 0);
    setNotification('');
  };

  // Update progress bar and background color
  useEffect(() => {
    const duration = parseInt(inputRef.current.value, 10) || 0
    if (progressBarRef.current) {
      const percentage = (remainingTime / duration) * 100;
      progressBarRef.current.style.width = `${percentage}%`;
    }
    
    const backgroundColor = remainingTime < 10 ? 'pink' : 'white';
    document.getElementById('timer-background').style.backgroundColor = backgroundColor;
  }, [remainingTime]);

  // Format time display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div id="timer-background" style={{ padding: '20px', border: '1px solid black' }}>
      <div style={{ marginBottom: '10px' }}>
        <div>Remaining Time: {formatTime(remainingTime)}</div>
        <div style={{ height: '10px', width: '100%', backgroundColor: '#ddd', marginTop: '10px' }}>
          <div ref={progressBarRef} style={{ height: '100%', width: '100%', backgroundColor: '#4caf50' }}></div>
        </div>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          ref={inputRef}
          defaultValue={60}
          onChange={handleDurationChange}
          min="0"
          style={{ marginRight: '10px' }}
        />
        <span>Set Duration (seconds)</span>
      </div>
      {notification && <div style={{ marginTop: '10px', color: 'red' }}>{notification}</div>}
    </div>
  );
};

export default Timer;
