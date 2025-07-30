import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Stopwatch from './pages/Stopwatch';
import Pomodoro from './pages/Pomodoro';
import BinaryConverter from './pages/BinaryConverter';
import RandomGenerator from './pages/RandomGenerator';
import LoremIpsum from './pages/LoremIpsum';

export default function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="bg-light p-3" style={{ width: '220px', height: '100vh' }}>
          <h4>Utilitários</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link" to="/">Calculadora</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/stopwatch">Stopwatch</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pomodoro">Pomodoro</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/converter">Conversor Binário</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/random">Gerador Aleatório</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/lorem">Lorem Ipsum</Link></li>
          </ul>
        </div>
        <div className="p-4" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/converter" element={<BinaryConverter />} />
            <Route path="/random" element={<RandomGenerator />} />
            <Route path="/lorem" element={<LoremIpsum />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
