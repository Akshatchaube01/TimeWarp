import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-details">
          <h4><strong>Contact Us</strong></h4>
          <ul className="contact-list">
            <li>
              <i className="fas fa-envelope"></i>&nbsp;&nbsp;
              <a href="mailto:akshatchaube22@gmail.com">akshatchaube22@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <a href="tel:+91 1234987619">+91 1234987619</a>
            </li>
          </ul>
        </div>
        <div className="footer-section navigation">
          <h4><strong>Navigation</strong></h4>
          <ul className="nav-list">
            <li>
              <a href="/" className="nav-link">
                <i className="fas fa-home"></i>&nbsp;&nbsp;Home
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="nav-link">
                <i className="fas fa-user"></i>&nbsp;&nbsp;About Us
              </a>
            </li>
            <li>
              <a href="/DemoSection" className="nav-link">
                <i className="fas fa-cogs"></i>&nbsp;&nbsp;Services
              </a>
            </li>
            <li>
              <a href="/ContactUs" className="nav-link">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;Contact
              </a>
            </li>
            <li>
              <a href="/Models" className="nav-link">
                <i className="fas fa-database"></i>&nbsp;&nbsp;Models
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section quote">
          <h4><strong>Quote</strong></h4>
          <p>
            <cite>Innovation distinguishes between a leader and a follower.</cite> - Steve Jobs
          </p>
        </div>
        <div className="footer-section social-media">
          <h4><strong>Follow Us</strong></h4>
          <ul className="social-list">
            <li>
              <a href="https://github.com/Akshatchaube01/TimeWarp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>&nbsp;&nbsp; Github
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>&nbsp;&nbsp; Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>&nbsp;&nbsp; Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/akshat-chaube-b2b042226/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>&nbsp;&nbsp; LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TimeWarp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
