import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

// function Home() {
//   return (
//     <div className="home-container">

//       <div className="menu-container">
//         <div className="menu-item">Home</div>
//         <div className="menu-item">Transactions</div>
//         <div className="menu-item">Categories</div>
//         <div className="menu-item">Reports</div>
//         <div className="menu-item">Settings</div>
//       </div>
//       <div className="icon-container">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <h2>Welcome to Your App</h2>
//       <h3>Your Account Balance</h3>
//       <p>$10,000</p>
//     </div>
//   );
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
//   quote: 'This is what she said.',
// };

export default function Profile() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="bg-gray-500 text-center text-white">electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs please
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }
