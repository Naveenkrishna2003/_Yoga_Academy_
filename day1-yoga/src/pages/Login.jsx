import React, { useState } from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setError('');
      console.log('Login successful!');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="login-container">
    <center>
    <br></br>
    <h2>Login</h2>
    </center>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="form-group">
            <br></br>
            <center>
            <button type="button" onClick={handleLogin}>
            Login
            </button>
            </center>
            <Link to="/signup">New User? Click to SignUp</Link>
            <br></br>
            </div>
            {error && <div className="error-message">{error}</div>}
            </form>
            </div>
            </div>
  );
};

export default Login;