import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ProfileCard from './Components/ProfileCard';
import AppRoutes from './Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './assets/styles.css';

function App() {
  const [isDay, setIsDay] = useState(true);
  const [language, setLanguage] = useState('en');

  const toggleBackgroundColor = () => {
    setIsDay(!isDay);
  };

  const toggleLanguage = () => {
    switch (language) {
      case 'en':
        setLanguage('pt');
        break;
      case 'pt':
        setLanguage('es');
        break;
      case 'es':
        setLanguage('en');
        break;
      default:
        setLanguage('en');
        break;
    }
  };

  return (
    <div className="app-container" style={{ backgroundColor: 'rgb(17, 24, 39)', background: isDay ? 'linear-gradient(45deg, var(--purple), var(--purple-light))' : 'linear-gradient(45deg, var(--classic), var(--classic))' }}>
      <div className="button-container">
        <button className="toggle-theme-btn" onClick={toggleBackgroundColor}>
          <FontAwesomeIcon icon={isDay ? faMoon : faSun} />
        </button>
        <button className="toggle-language-btn" onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faLanguage} />
        </button>
      </div>
      <Router>
        <div className="container">
          <ProfileCard />
          <div className="page-content">
            <AppRoutes language={language} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
