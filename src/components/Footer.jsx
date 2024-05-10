import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2c3e50' }} className="section bg-footer">
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-15px' }} className="row">
                    <div style={{ flex: '0 0 25%', maxWidth: '25%' }} className="col-lg-3">
                        <div style={{ color: '#fff' }}>
                            <h6 style={{ textTransform: 'uppercase' }} className="footer-heading text-white">Information</h6>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }} className="list-unstyled footer-link mt-4">
                                <li><a href="#" style={{ color: '#fff' }}>Pages</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Our Team</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Features</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Pricing</a></li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ flex: '0 0 25%', maxWidth: '25%' }} className="col-lg-3">
                        <div style={{ color: '#fff' }}>
                            <h6 style={{ textTransform: 'uppercase' }} className="footer-heading text-white">Resources</h6>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }} className="list-unstyled footer-link mt-4">
                                <li><a href="#" style={{ color: '#fff' }}>Monitoring Grader</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Video Tutorial</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Term &amp; Service</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Zeeko API</a></li>
                            </ul>
                        </div>
                    </div>

                    <div  style={{ flex: '0 0 16.666667%', maxWidth: '16.666667%' }}  className="col-lg-2">
                        <div style={{ color: '#fff' }}>
                            <h6 style={{ textTransform: 'uppercase' }} className="footer-heading text-white">Help</h6>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }} className="list-unstyled footer-link mt-4">
                                <li><a href="#" style={{ color: '#fff' }}>Sign Up</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Login</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Terms of Services</a></li>
                                <li><a href="#" style={{ color: '#fff' }}>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div  style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%' }} className="col-lg-4">
                        <div style={{ color: '#fff' }}>
                            <h6 style={{ textTransform: 'uppercase' }} className="footer-heading text-white">Contact Us</h6>
                            <p style={{ marginTop: '1.5rem' }} className="contact-info">Contact us if need help with anything</p>
                            <p className="contact-info">+01 123-456-7890</p>
                            <div style={{ marginTop: '3rem' }}>
                                <ul style={{ listStyleType: 'none', paddingLeft: 0  }} className="list-inline">
                                    <li style={{ display: 'inline-block' }} className="list-inline-item"><a href="#"><i style={{ color: '#fff' }} className="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                                    <li style={{ display: 'inline-block' }} className="list-inline-item"><a href="#"><i style={{ color: '#fff' }} className="fab twitter footer-social-icon fa-twitter"></i></a></li>
                                    <li style={{ display: 'inline-block' }} className="list-inline-item"><a href="#"><i style={{ color: '#fff' }} className="fab google footer-social-icon fa-google"></i></a></li>
                                    <li style={{ display: 'inline-block' }} className="list-inline-item"><a href="#"><i style={{ color: '#fff' }} className="fab apple footer-social-icon fa-apple"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '3.5rem' }} className="text-center">
                <p style={{ color: '#bdc3c7', marginBottom: 0 }} className="footer-alt mb-0 f-14">2024 © TimeSwap, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
