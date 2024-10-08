import React from 'react';
import picture1 from '../images/picture1.jpg'; // Adjust the path as per your folder structure
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
            <h1 className="centered-heading">Welcome to the Peer Review Platform</h1>
      <img src={picture1} alt="Peer Review Platform" className="centered-image" />
      
      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 Peer Review Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
