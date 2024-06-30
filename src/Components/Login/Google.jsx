import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Google = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    var decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);

    // Save user data to localStorage or context
    localStorage.setItem('user', JSON.stringify(decoded));

    // Redirect to the home page
    navigate('/home');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default Google;
