import { useNavigate,NavLink } from 'react-router-dom';

import "./login.css"
import React, { useState } from 'react';
import logo from'./images/MyLogo.png';


const Login =() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  const navigate = useNavigate();
  const verifyCredentials = () => {
    const normalUsername = "borgimoatez@gmail.com";
    const normalPassword = "mimwc123";
    const superUsername = "jalelkadi@gmail.com";
    const superPassword = "admin123";

    if (username === normalUsername && password === normalPassword) {
      navigate('/Jawdou');
    } else if (username === superUsername && password === superPassword) {
      navigate('/Sidi');
    } else {
      setVerificationResult("Invalid credentials.");
    }
  }
  function onSubmittoforgetpass()
  {

    navigate('/');
  }
  function onSubmittoregister()
  {

    navigate('/');
  }
 

  return (
    <div className="form-container">
      <p>Login</p>
      <form className="form">
        <label>Email</label>
        <input type="text" className="input" placeholder="Enter your email" id="email" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" className="input" placeholder="Password" id="password"  onChange={(e) => setPassword(e.target.value)} /> 
        <button onClick={verifyCredentials}>Submit</button>
      </form>
    </div>
  );
}; 

export default Login;