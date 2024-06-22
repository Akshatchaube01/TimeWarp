import { useEffect, useState } from 'react';
import React from 'react';
import './Footer.css';

const quotes = [
  "Innovation distinguishes between a leader and a follower.",
  "Simplicity is the ultimate sophistication.",
  "The secret of getting ahead is getting started.",
  "All limitations are self-imposed.",
  "Tough times never last but tough people do.",
  "Strive for greatness.",
  // Add more quotes as needed
];

const Footer = () => {
  const [footerStyle, setFooterStyle] = useState({
    color: 'black'
  });
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    let savedTheme = localStorage.getItem('theme') || 'light';
    setFooterStyle({
      color: savedTheme === 'light' ? 'white' : 'white',
      backgroundColor: savedTheme === 'light' ? '#0ea5e9' : '',
    });

    const intervalId = setInterval(() => {
      setQuote(prevQuote => {
        const index = (quotes.indexOf(prevQuote) + 1) % quotes.length;
        return quotes[index];
      });
    }, 10000); // changes every 10 seconds

    // Add Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();

    return () => clearInterval(intervalId); // cleanup interval on component unmount
  }, []);

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-content">
        <div className="footer-section contact-details">
          <h4><strong style={footerStyle}>Contact Us</strong></h4>
          <ul className="contact-list">
            <li style={footerStyle}>
              <i className="fas fa-envelope"></i>&nbsp;&nbsp;
              <a style={footerStyle} href="mailto:akshatchaube22@gmail.com">akshatchaube22@gmail.com</a>
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
            <cite style={footerStyle}>{quote}</cite>
          </p>
          <div id="google_translate_element" className="mt-5 p-2 bg-white rounded-md shadow-md"></div>
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
              <a style={footerStyle} href="https://x.com/" target="_blank" rel="noopener noreferrer">
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
        <div className="footer-section social-media">
          <h4><strong style={footerStyle}>Company</strong></h4>
          <ul className="social-list">
            <li style={footerStyle}>
              <a style={footerStyle} href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li style={footerStyle}>
              <a style={footerStyle} href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </li>
            <li>
              <input type="text" placeholder="Enter your email" className="p-1 rounded-md" />
            </li>
            <li>
              <button className="border px-2 py-1 rounded-sm">Subscribe</button>
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