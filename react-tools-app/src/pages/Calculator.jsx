import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Erro');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input type="text" className="form-control mb-2" value={input} readOnly />
      <div className="d-grid gap-2">
        {["1","2","3","+","4","5","6","-","7","8","9","*","0","C","=","/"]
          .map((val) => (
            <button key={val} className="btn btn-secondary" onClick={() => handleClick(val)}>{val}</button>
          ))}
      </div>
    </div>
  );
}