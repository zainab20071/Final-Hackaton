import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">School Management System</h1>
      <div className="button-group">
        <Link to="/feedback">
          <button className="home-button student">Student Feedback</button>
        </Link>
        <Link to="/admin/login">
          <button className="home-button admin">Admin Login</button>
        </Link>
        <Link to="/admin/dashboard">
          <button className="home-button dashboard">Admin Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
