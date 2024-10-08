import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css'; // Optional for styling

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you could clear any authentication tokens, etc.
    alert('Logged out successfully');
    navigate('/'); // Redirect to index (home) page
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
