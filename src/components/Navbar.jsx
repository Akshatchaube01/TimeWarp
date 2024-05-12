import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; 
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li>
                    <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" className="nav-link" activeClassName="active">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/demosection" className="nav-link" activeClassName="active">Demo Section</NavLink>
                </li>
                <li>
                    <NavLink to="/models" className="nav-link" activeClassName="active">Models</NavLink>
                </li>
                <li>
                    <NavLink to="/contactus" className="nav-link" activeClassName="active">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
