import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Shared CSS for both dashboards

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('createAssignment');

  const handleLogout = () => {
    navigate('/');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="dashboard-section">
            <h2>Profile</h2>
            <p>Admin Name: Abhiram</p>
            <p>Email: admin@example.com</p>
          </div>
        );
      case 'createAssignment':
        return (
          <div className="dashboard-section">
            <h2>Create Assignment</h2>
            <form className="dashboard-form">
              <label className="dashboard-label">Assignment Title</label>
              <input type="text" className="dashboard-input" placeholder="Enter assignment title" />

              <label className="dashboard-label">Description</label>
              <textarea className="dashboard-input" placeholder="Enter assignment description"></textarea>

              <button type="submit" className="dashboard-button">Create Assignment</button>
            </form>
          </div>
        );
      case 'checkSubmissions':
        return (
          <div className="dashboard-section">
            <h2>Check Submissions</h2>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Assignment</th>
                  <th>Status</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>prashanth</td>
                  <td>Project 1</td>
                  <td>Submitted</td>
                  <td>90</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveSection('createAssignment')}>Create Assignment</li>
          <li onClick={() => setActiveSection('checkSubmissions')}>Check Submissions</li>
          <li onClick={() => setActiveSection('profile')}>Profile</li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

        {renderSection()}

      </div>
    </div>
  );
}

export default AdminDashboard;
