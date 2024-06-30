import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Calculator />} /> {/* or your home component */}
      </Routes>
    </Router>
  );
};

export default App;
