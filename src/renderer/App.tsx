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

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  quote: 'This is what she said.',
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <p>{user.quote}</p>
    </>
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
