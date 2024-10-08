import React from 'react';
import './Contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, suggestions, or need support, feel free to reach out to us!
        </p>
        <p>
          Email: support@peerreviewplatform.com<br />
          Phone: +123-456-7890<br />
        </p>
        <p>
          We are here to help you with any issues you face while using the platform. 
          Reach out to us during working hours, and we will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default Contact;
