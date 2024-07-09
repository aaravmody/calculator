// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,  // Ensure credentials are included
});

export default api;
