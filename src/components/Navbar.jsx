import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => location.pathname === path ? 'text-[#00bfff] underline' : 'text-white';

    return (
        <nav className="z-50 h-16 flex justify-center sticky top-0 w-screen backdrop-filter backdrop-blur-lg bg-opacity-40 p-4">
            <div className="flex items-center">
                <button onClick={toggleMenu} className="hover:underline block md:hidden">
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></span>
                </button>
                <ul className={`flex flex-col md:flex-row justify-center items-center list-none m-0 p-4 gap-x-0 md:gap-x-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <li className="hover:underline" onClick={closeMenu}>
                        <NavLink to="/" className={isActive('/')}>Home</NavLink>
                    </li>
                    <li className="hover:underline" onClick={closeMenu}>
                        <NavLink to="/AboutUs" className={isActive('/AboutUs')}>About Us</NavLink>
                    </li>
                    <li className="hover:underline" onClick={closeMenu}>
                        <NavLink to="/DemoSection" className={isActive('/DemoSection')}>Demo Section</NavLink>
                    </li>
                    <li className="hover:underline" onClick={closeMenu}>
                        <NavLink to="/Models" className={isActive('/Models')}>Models</NavLink>
                    </li>
                    <li className="hover:underline" onClick={closeMenu}>
                        <NavLink to="/ContactUs" className={isActive('/ContactUs')}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
