import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removendo 'Navigate' da importação
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Academic from './pages/Academic';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound'; // Importe o componente NotFound aqui

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} /> {/* Rota para lidar com URLs não encontradas */}
    </Routes>
  );
};

export default AppRoutes;
