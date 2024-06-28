import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="420310191921-qj1apmgcr2u0fs2bd21qusgnc0qrjt43.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
