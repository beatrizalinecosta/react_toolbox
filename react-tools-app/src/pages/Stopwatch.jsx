import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <h3>{time}s</h3>
      <button className="btn btn-success me-2" onClick={() => setRunning(true)}>Start</button>
      <button className="btn btn-warning me-2" onClick={() => setRunning(false)}>Pause</button>
      <button className="btn btn-danger" onClick={() => {setRunning(false); setTime(0);}}>Reset</button>
    </div>
  );
}
