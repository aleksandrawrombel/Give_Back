import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LogIn />} />
        <Route path="/rejestracja" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
