import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'text-[#00bfff] underline' : '';

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="z-50 lg:h-[7rem] flex items-center justify-between sticky top-0 w-screen backdrop-filter backdrop-blur-lg bg-opacity-40 p-4 navbar">
            <style>
                @import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
            </style>
            <button
                className="block md:hidden p-2 ml-auto"
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >

                {!isMenuOpen ? <i className="ri-menu-line text-white text-2xl"></i> : <i class="fa-solid fa-xmark text-2xl"></i>}
            </button>
            <ul className={`absolute bg-black opacity-80 gap-5 md:relative top-full left-0 md:left-auto md:top-auto w-full md:flex md:items-center md:justify-center md:bg-transparent transition-all duration-500 ease-in-out flex ${isMenuOpen ? 'h-auto ' : 'h-0 p-0 overflow-hidden'} flex-col md:flex-row list-none m-0 p-4 gap-x-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl`}>
                <li className=" text-center md:text-left">
                    <NavLink to="/" className={`nav-link ${isActive('/')}`} onClick={handleLinkClick}>
                        <i className="ri-home-fill"></i>
                        <span>&nbsp;Home</span>
                    </NavLink>
                </li>
                <li className=" text-center md:text-left">
                    <NavLink to="/AboutUs" className={`nav-link ${isActive('/AboutUs')}`} onClick={handleLinkClick}>
                        <i className="ri-building-fill"></i>
                        <span>&nbsp;About Us</span></NavLink>
                </li>
                <li className=" text-center md:text-left">
                    <NavLink to="/DemoSection" className={`nav-link ${isActive('/DemoSection')}`} onClick={handleLinkClick}>
                        <i className="ri-service-fill"></i>
                        <span>&nbsp;Demo Section</span>
                    </NavLink>                </li>
                <li className=" text-center md:text-left">
                    <NavLink to="/Models" className={`nav-link ${isActive('/Models')}`} onClick={handleLinkClick}>
                        <i className="ri-layout-2-fill"></i>
                        <span>&nbsp;Models</span>
                    </NavLink>                </li>
                <li className=" text-center md:text-left">
                    <NavLink to="/ContactUs" className={`nav-link ${isActive('/ContactUs')}`} onClick={handleLinkClick}>
                        <i className="ri-customer-service-2-fill"></i>
                        <span>&nbsp;Contact Us</span>
                    </NavLink>
                </li>
                <li className=" text-center md:text-left colour:none">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
