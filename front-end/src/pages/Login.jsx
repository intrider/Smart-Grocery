import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function sendData() {
    if (email === '' || password === '') {
      alert("Username and password can't be empty");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3008/user/login', {
        email: email,
        password: password
      });
      console.log(response.data);
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      console.log('Error logging in:', error);
      alert('Login failed');
    }
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="login.css" />
      <title>Login</title>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); sendData(); }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;