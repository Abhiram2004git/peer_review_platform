import React from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <Link to="/" style={{ margin: '10px', fontSize: '2rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ margin: '10px', fontSize: '2rem', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ margin: '10px', fontSize: '2rem', textDecoration: 'none' }}>Contact</Link>
        <Link to="/login" style={{ margin: '10px', fontSize: '2rem', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ margin: '10px', fontSize: '2rem', textDecoration: 'none' }}>Signup</Link>
      </div>
    </div>
  );
}

export default IndexPage;
