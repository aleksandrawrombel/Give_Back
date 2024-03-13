import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
