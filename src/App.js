import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileCard from './Components/ProfileCard';
import AppRoutes from './Routes'; // Ajuste o nome do arquivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './assets/styles.css';

function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleBackgroundColor = () => {
    setIsDay(!isDay);
  };

  return (
    <div className="app-container" style={{ background: isDay ? 'linear-gradient(45deg, var(--purple), var(--purple-light))' : 'linear-gradient(45deg, var(--dark-blue), var(--blue))' }}>
      <button className="toggle-theme-btn" onClick={toggleBackgroundColor}>
        <FontAwesomeIcon icon={isDay ? faMoon : faSun} />
      </button>
      
      <Router>
        <div className="container">
          <ProfileCard />
          
          <div className="page-content">
            <AppRoutes />
          </div>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
