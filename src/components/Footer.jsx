import { useEffect, useState } from 'react';
import React from 'react';
import './Footer.css';
// import '';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact-details">
                    <h4><strong>Contact Us</strong></h4>
                    <p>Email: <a href="mailto:akshatchaube22@gmail.com">akshatchaube22@gmail.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+91 1234987619</a></p>
                </div>
                <div className="footer-section navigation">
                    <h4><strong>Navigation</strong></h4>
                    <ul>
                        <li><a href="/"> <i className="fas fa-home"></i>&nbsp;&nbsp;Home</a></li>
                        <li><a href="/AboutUs"><i className="fas fa-user"></i>&nbsp;&nbspAbout Us</a></li>
                        <li><a href="/DemoSection"><i className="fas fa-cogs"></i>&nbsp;&nbsp;Services</a></li>
                        <li><a href="/ContactUs"> <i className="fas fa-envelope"></i>&nbsp;&nbsp;Contact</a></li>
                        <li><a href="/Models"><i className="fas fa-database"></i>&nbsp;&nbsp;Models</a></li>
                    </ul>
                </div>
                <div className="footer-section quote">
                    <h4><strong>Quote</strong></h4>
                    <p><cite>Innovation distinguishes between a leader and a follower.</cite> - Steve Jobs</p>
                </div>
                <div className="footer-section social-media">
                    <h4><strong>Follow Us</strong></h4>
                    <div className='smedia'>
                    <a href="https://github.com/Akshatchaube01/TimeWarp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akshat-chaube-b2b042226/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 TimeWarp. All rights reserved.</p>
            </div>
        </footer>
    );
}

  const [footerStyle, setFooterStyle] = useState({
    color: 'black' // Default color
  });
  let savedTheme;
  // savedTheme = localStorage.getItem('theme') || 'light'; // Retrieve theme from localStorage
  useEffect(() => {
   savedTheme = localStorage.getItem('theme') || 'light'; // Retrieve theme from localStorage
    setFooterStyle({
      color: savedTheme == 'light' ? 'black' : 'white' // Update footer color based on theme
    });
  }, [savedTheme]);

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-content">
        <div className="footer-section contact-details">
          <h4><strong style={footerStyle}>Contact Us</strong></h4>
          <ul className="contact-list">
            <li style={footerStyle}>
              <i className="fas fa-envelope"></i>&nbsp;&nbsp;
              <a style={footerStyle} sty href="mailto:akshatchaube22@gmail.com">akshatchaube22@gmail.com</a>
            </li>
            <li style={footerStyle}>
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <a style={footerStyle} href="tel:+91 1234987619">+91 1234987619</a>
            </li>
          </ul>
        </div>
        <div className="footer-section navigation">
          <h4><strong style={footerStyle}>Navigation</strong></h4>
          <ul className="nav-list">
            <li style={footerStyle}>
              <a style={footerStyle} href="/" className="nav-link">
                <i className="fas fa-home"></i>&nbsp;&nbsp;Home
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="/AboutUs" className="nav-link">
                <i className="fas fa-user"></i>&nbsp;&nbsp;About Us
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="/DemoSection" className="nav-link">
                <i className="fas fa-cogs"></i>&nbsp;&nbsp;Services
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="/ContactUs" className="nav-link">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;Contact
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="/Models" className="nav-link">
                <i className="fas fa-database"></i>&nbsp;&nbsp;Models
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section quote">
          <h4><strong style={footerStyle}>Quote</strong></h4>
          <p>
            <cite style={footerStyle}>Innovation distinguishes between a leader and a follower.</cite> - Steve Jobs
          </p>
        </div>
        <div className="footer-section social-media">
          <h4><strong style={footerStyle}>Follow Us</strong></h4>
          <ul className="social-list">
            <li style={footerStyle}>
              <a style={footerStyle} href="https://github.com/Akshatchaube01/TimeWarp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>&nbsp;&nbsp; Github
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
               <i className="fa-brands fa-x-twitter"></i>&nbsp;&nbsp; Twitter
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>&nbsp;&nbsp; Instagram
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="https://www.linkedin.com/in/akshat-chaube-b2b042226/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>&nbsp;&nbsp; LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={footerStyle}>© 2024 TimeWarp. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;


