import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Academic from './pages/Academic';
import Blog from './pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
