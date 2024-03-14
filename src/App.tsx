import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import LogOut from './components/LogOut.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LogIn />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<LogOut />} />
        <Route path="/oddaj-rzeczy" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
