import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'text-[#00bfff] underline' : 'text-white';

    return (
        <nav className="z-50 h-16 flex justify-center sticky top-0 w-screen backdrop-filter backdrop-blur-lg bg-opacity-40 p-4">
            <ul className="flex flex-col md:flex-row justify-center items-center list-none m-0 p-4 gap-x-0 md:gap-x-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl">
                <li className="hover:underline block md:hidden">
                    <span className="fa fa-bars"></span>
                </li>
                <li className="hover:underline hidden md:block">
                    <NavLink to="/" className={isActive('/')}>Home</NavLink>
                </li>
                <li className="hover:underline hidden md:block">
                    <NavLink to="/AboutUs" className={isActive('/AboutUs')}>About Us</NavLink>
                </li>
                <li className="hover:underline hidden md:block">
                    <NavLink to="/DemoSection" className={isActive('/DemoSection')}>Demo Section</NavLink>
                </li>
                <li className="hover:underline hidden md:block">
                    <NavLink to="/Models" className={isActive('/Models')}>Models</NavLink>
                </li>
                <li className="hover:underline hidden md:block">
                    <NavLink to="/ContactUs" className={isActive('/ContactUs')}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>

    );
};
export default Navbar;
