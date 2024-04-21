// Navbar.jsx
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav >
      <ul className="navbar-list">
        <li><a href="/">Home</a></li>
        <li><a href="/AboutUs">About Us</a></li>
        <li><a href="/DemoSection">Demo Section</a></li>
        <li><a href="/ContactUs">Contact Us   </a></li>
      </ul>
    </nav>
  
  );
}
export default Navbar;

