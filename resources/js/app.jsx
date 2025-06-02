import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('app');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(<App />);
  }
});
