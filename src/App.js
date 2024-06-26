import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileCard from './Components/ProfileCard';
import AppRoutes from './Routes'; // Ajuste o nome do arquivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones necessários
import './assets/styles.css';

function App() {
  const [isDay, setIsDay] = useState(true);
  const [language, setLanguage] = useState('en'); // Estado para controlar o idioma ('en' para inglês por padrão)

  const toggleBackgroundColor = () => {
    setIsDay(!isDay);
  };

  const toggleLanguage = () => {
    // Lógica para alternar entre os idiomas
    switch (language) {
      case 'en':
        setLanguage('pt'); // Alterna para português
        break;
      case 'pt':
        setLanguage('es'); // Alterna para espanhol
        break;
      case 'es':
        setLanguage('en'); // Alterna de volta para inglês
        break;
      default:
        setLanguage('en'); // Caso padrão, configura para inglês
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

      <Router basename='/'>
        <div className="container">
          <ProfileCard />

          <div className="page-content">
            {/* Passa a variável de idioma para o componente AppRoutes */}
            <AppRoutes language={language} />
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
