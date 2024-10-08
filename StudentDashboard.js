import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Shared CSS for both dashboards

function StudentDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('profile');

  const handleLogout = () => {
    navigate('/');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="dashboard-section">
            <h2>Profile</h2>
            <p>Student Name: sujay</p>
            <p>Email: student@example.com</p>
          </div>
        );
      case 'uploadAssignment':
        return (
          <div className="dashboard-section">
            <h2>Upload Assignment</h2>
            <form className="dashboard-form">
              <label className="dashboard-label">Select Assignment (PDF)</label>
              <input type="file" className="dashboard-input" />

              <button type="submit" className="dashboard-button">Upload</button>
            </form>
          </div>
        );
      case 'giveScore':
        return (
          <div className="dashboard-section">
            <h2>Give Score</h2>
            <form className="dashboard-form">
              <label className="dashboard-label">Assignment Title</label>
              <input type="text" className="dashboard-input" placeholder="Enter assignment title" />

              <label className="dashboard-label">Score (0-100)</label>
              <input type="number" className="dashboard-input" placeholder="Enter score" />

              <button type="submit" className="dashboard-button">Submit Score</button>
            </form>
          </div>
        );
      case 'viewScores':
        return (
          <div className="dashboard-section">
            <h2>View Scores</h2>
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project 1</td>
                  <td>85</td>
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
          <li onClick={() => setActiveSection('profile')}>Profile</li>
          <li onClick={() => setActiveSection('uploadAssignment')}>Upload Assignment</li>
          <li onClick={() => setActiveSection('giveScore')}>Give Score</li>
          <li onClick={() => setActiveSection('viewScores')}>View Scores</li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Student Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

        {renderSection()}

      </div>
    </div>
  );
}

export default StudentDashboard;
