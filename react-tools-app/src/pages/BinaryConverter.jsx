// src/pages/BinaryConverter.jsx
import { useState } from 'react';

export default function BinaryConverter() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  const convert = () => {
    try {
      setDecimal(parseInt(binary, 2).toString());
    } catch {
      setDecimal('Erro');
    }
  };

  return (
    <div>
      <h2>Conversor Binário → Decimal</h2>
      <input type="text" className="form-control mb-2" value={binary} onChange={e => setBinary(e.target.value)} />
      <button className="btn btn-primary mb-2" onClick={convert}>Converter</button>
      <div>Decimal: <strong>{decimal}</strong></div>
    </div>
  );
}
