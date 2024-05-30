/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex flex-row">
                <div className="footer-section contact-details font-bold">
                    <h4 className='px-14'><strong>Contact Us</strong></h4>
                    <p>Email: <a href="mailto:akshatchaube22@gmail.com">akshatchaube22@gmail.com</a></p>
                    <p>Phone: </p>
                    <p><a href="tel:+1234567890">+91 1234987619</a></p>
                </div>
                <div className="footer-section navigation font-bold">
                    <h4 className='px-40'><strong>Navigation</strong></h4>
                    <ul className='flex'>
                        <div className="flex">
                            <li><a href="/">Home</a></li>
                            <div className="invisible">
                                &nbsp
                            </div>
                            <li><a href="/AboutUs">About Us</a></li>
                            <div className="invisible">
                                &nbsp
                            </div>
                            <li><a href="/DemoSection">Services</a></li>
                            <div className="invisible">
                                &nbsp
                            </div>
                        </div>
                        <li><a href="/ContactUs">Contact</a></li>
                        <div className="invisible">
                            &nbsp
                        </div>
                        <li><a href="/Models">Models</a></li>
                    </ul>
                </div>
                <div className="footer-section quote font-bold">
                    <h4 className='px-20'><strong>Quote</strong></h4>
                    <p><cite>Innovation distinguishes between a leader and a follower.</cite> - Steve Jobs</p>
                </div>
                <div className="footer-section social-media ">
                    <h4 className='px-16'><strong>Follow Us</strong></h4>
                    <div className='smedia'>
                    <a href="https://github.com/Akshatchaube01/TimeWarp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <div className="invisible">
                        &nbsp
                    </div>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <div className="invisible">
                        &nbsp
                    </div>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <div className="invisible">
                        &nbsp
                    </div>
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
