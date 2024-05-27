import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'text-[#00bfff] underline' : '';

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="z-50 h-16 flex items-center justify-between sticky top-0 w-screen backdrop-filter backdrop-blur-lg bg-opacity-40 p-4 navbar">
            <style>
                @import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
            </style>
            <button 
                className="block md:hidden p-2 ml-auto"
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >
                <i className="ri-menu-line text-2xl"></i>
            </button>
            <ul className={`absolute bg-black opacity-80 gap-5 md:relative top-full left-0 md:left-auto md:top-auto w-full md:flex md:items-center md:justify-center md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row list-none m-0 p-4 gap-x-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl`}>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/" className={isActive('/')} onClick={handleLinkClick}><i className="ri-home-fill"></i> Home</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/AboutUs" className={isActive('/AboutUs')} onClick={handleLinkClick}><i className="ri-building-fill"></i> About Us</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/DemoSection" className={isActive('/DemoSection')} onClick={handleLinkClick}><i className="ri-service-fill"></i> Demo Section</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/Models" className={isActive('/Models')} onClick={handleLinkClick}><i className="ri-layout-2-fill"></i> Models</NavLink>
                </li>
                <li className="hover:underline text-center md:text-left">
                    <NavLink to="/ContactUs" className={isActive('/ContactUs')} onClick={handleLinkClick}><i className="ri-customer-service-2-fill"></i> Contact Us</NavLink>
                </li>
                <li className="text-center md:text-left">
                    <ThemeToggle /> {/* Add ThemeToggle component here */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
