import { useState } from 'react';

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(1);
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.`;

  return (
    <div>
      <h2>Gerador de Lorem Ipsum</h2>
      <input type="number" className="form-control mb-2" value={paragraphs} min={1} onChange={e => setParagraphs(e.target.value)} />
      {[...Array(Number(paragraphs))].map((_, i) => (
        <p key={i}>{lorem}</p>
      ))}
    </div>
  );
}