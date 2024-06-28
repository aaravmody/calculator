import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const gotolog = () => {
        navigate('/login');
    }
  return (
    <>
      <div className="card">
        <form className="form">
          <p id="heading">Register</p>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM1 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2z"/>
            </svg>
            <input autoComplete="off" placeholder="Name" className="input-field" type="text" />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm8 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            <input autoComplete="off" placeholder="Email" className="input-field" type="email" />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
            <input placeholder="Password" className="input-field" type="password" />
          </div>
          <div className="btn">
            <button className="button1">Register</button>
            <button className="button2" onClick={gotolog}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
