import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy logic to check the username and password for the sake of example.
    // In a real app, you'd verify credentials with a backend API and receive user role info.

    if (username === 'admin' && password === 'admin123') {
      // If the user is an admin, redirect to the admin dashboard
      navigate('/admin-dashboard');
    } else if (username === 'student' && password === 'student123') {
      // If the user is a student, redirect to the student dashboard
      navigate('/student-dashboard');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
