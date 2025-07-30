// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <h4>Ferramentas</h4>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item"><Link to="/" className="nav-link">Calculadora</Link></li>
        <li className="nav-item"><Link to="/stopwatch" className="nav-link">Stopwatch</Link></li>
        <li className="nav-item"><Link to="/pomodoro" className="nav-link">Pomodoro</Link></li>
        <li className="nav-item"><Link to="/binary" className="nav-link">Conversor Binário</Link></li>
        <li className="nav-item"><Link to="/random" className="nav-link">Gerador Aleatório</Link></li>
        <li className="nav-item"><Link to="/lorem" className="nav-link">Lorem Ipsum</Link></li>
      </ul>
    </div>
  );
}
