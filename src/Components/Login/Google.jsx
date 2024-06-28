import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React from 'react'

const Google = () => {
  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    var decoded = jwtDecode(credentialResponse.credential)
    console.log(decoded)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  )
}

export default Google