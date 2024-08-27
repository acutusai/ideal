// src/Navbar.js

import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Try&Review</a>
      </div>
      
      <div className="navbar-links">
        <a href="#">How it works</a>
        <a href="#">About us</a>
        
        <button className="login-btn">Login</button>
        <button className="join-btn">Join Free</button>
      
      </div>
      
    </nav>
  );
}

export default Navbar;
