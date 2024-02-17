import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(2 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          alert('Time is up!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const mins = Math.floor(time / 60);
  const secs = (time % 60).toString().padStart(2, '0');

  return (
    <div className="time-text">
      <h5>Time remaining</h5>
      <p>{`${mins}:${secs}`}</p>
    </div>
  );
}

export default Clock;
