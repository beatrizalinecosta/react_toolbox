import { useState, useEffect } from 'react';

export default function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const timer = running && setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const format = (s) => `${Math.floor(s / 60)}:${('0' + s % 60).slice(-2)}`;

  return (
    <div>
      <h2>Pomodoro</h2>
      <h3>{format(timeLeft)}</h3>
      <button className="btn btn-success me-2" onClick={() => setRunning(true)}>Iniciar</button>
      <button className="btn btn-warning me-2" onClick={() => setRunning(false)}>Pausar</button>
      <button className="btn btn-danger" onClick={() => {setRunning(false); setTimeLeft(25 * 60);}}>Resetar</button>
    </div>
  );
}
