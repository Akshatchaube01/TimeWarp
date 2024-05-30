import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import './Navbar.css';




const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'text-blue-400 underline' : '';

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar z-50 lg:h-[7rem] h-[4.5rem] flex items-center justify-between sticky top-0 w-screen  bg-gradient-to-r from-black to-blue-900 p-4">
            <style>
                @import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
            </style>
            <button 
                className="block md:hidden pr-4 ml-auto"
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >
 
            { !isMenuOpen ? <i className="ri-menu-line  text-white text-2xl"></i> : <i class="fa-solid fa-xmark"></i>}                 
            </button>
            <ul className={`absolute bg-black bg-opacity-80  md:relative top-full left-0 md:left-auto md:top-auto w-full md:flex md:items-center md:justify-center md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row list-none m-0 p-4 gap-x-10 text-sm md:text-base lg:text-2xl`}>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/" className={isActive('/')} onClick={handleLinkClick}><i className="ri-home-fill"></i>Home</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/AboutUs" className={isActive('/AboutUs')} onClick={handleLinkClick}><i className="ri-building-fill pr-2"></i>About Us</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/DemoSection" className={isActive('/DemoSection')} onClick={handleLinkClick}><i className="ri-service-fill pr-2"></i>Demo Section</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/Models" className={isActive('/Models')} onClick={handleLinkClick}><i className="ri-layout-2-fill pr-2"></i>Models</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/ContactUs" className={isActive('/ContactUs')} onClick={handleLinkClick}><i className="ri-customer-service-2-fill pr-2"></i>Contact Us</NavLink>
                </li>
                <li className="text-center md:text-left">
                    <ThemeToggle /> {/* Add ThemeToggle component here */}
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
