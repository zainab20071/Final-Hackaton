import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; // Make sure CSS is loaded
import { Navigate, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };
  const handleClicked =()=>{
    navigate('/admin/dashboard')
  }

  return (
    <div className="admin-login-container">
      <form onSubmit={handleLogin}>
        <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleClicked}>Login</button>
        {message && <p style={{ textAlign: 'center' }}>{message}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
