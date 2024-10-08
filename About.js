import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <h1>About the Peer Review Platform</h1>
        <p>
          Our peer review and collaboration platform enables students to work together on projects,
          review each other's work, and provide constructive feedback. With the support of admin (teachers), 
          students can track their progress, submit assignments, and evaluate peers to enhance learning 
          and project outcomes.
        </p>
        <p>
          Features include assignment creation, project collaboration tools, peer evaluation systems, 
          and progress monitoring. This platform empowers students to engage in effective teamwork 
          and peer-driven learning experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
