// src/pages/AdminDashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummy = [
      {
        name: 'Ali',
        email: 'ali@example.com',
        course: 'React',
        rating: 5,
        comments: 'Great course!',
        createdAt: new Date().toLocaleString()
      },
      {
        name: 'Sara',
        email: 'sara@example.com',
        course: 'Node.js',
        rating: 4,
        comments: 'Good explanation.',
        createdAt: new Date().toLocaleString()
      }
    ];
    setFeedbacks(dummy);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>📋 Admin Dashboard - All Feedbacks</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Course</th><th>Rating</th><th>Comments</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, index) => (
            <tr key={index}>
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.course}</td>
              <td>{f.rating}</td>
              <td>{f.comments}</td>
              <td>{f.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
