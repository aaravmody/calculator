// src/components/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import FileUpload from './Components/File Upload/FileUpload';
import api from './Components/api/api';

const AuthenticatedRoute = ({ element, user }) => {
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/api/user');
        setUser(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log('User not authenticated');
        } else {
          console.error('Error fetching user', error);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<FileUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
