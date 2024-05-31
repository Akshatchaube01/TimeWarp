/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

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

export default Footer;


