import { useState } from 'react';

export default function RandomGenerator() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result, setResult] = useState(null);

  const generate = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    if (!isNaN(minVal) && !isNaN(maxVal) && minVal <= maxVal) {
      const random = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
      setResult(random);
    } else {
      setResult('Erro');
    }
  };

  return (
    <div>
      <h2>Gerador de Número Aleatório</h2>
      <input type="number" className="form-control mb-2" placeholder="Mínimo" value={min} onChange={e => setMin(e.target.value)} />
      <input type="number" className="form-control mb-2" placeholder="Máximo" value={max} onChange={e => setMax(e.target.value)} />
      <button className="btn btn-primary mb-2" onClick={generate}>Gerar</button>
      {result !== null && <div>Resultado: <strong>{result}</strong></div>}
    </div>
  );
}
