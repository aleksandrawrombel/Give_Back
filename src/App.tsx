import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import LogOut from './components/LogOut.tsx';
import Form from './components/Form.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<LogIn />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<LogOut />} />
        <Route path="/oddaj-rzeczy" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
