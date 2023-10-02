import React, { useEffect, useRef, useState } from 'react';

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 2000);

    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      timer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
}

export default MutableRef;
