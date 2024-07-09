import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLoginComponent = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Save user data to localStorage or context
    localStorage.setItem('user', JSON.stringify(credentialResponse));

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

export default GoogleLoginComponent;
