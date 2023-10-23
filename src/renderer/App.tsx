import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      {/* <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div> */}
      <h2>Balance</h2>
      <h3>$10,000</h3>
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
