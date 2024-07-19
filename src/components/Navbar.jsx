import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isActive = (path) =>
    location.pathname === path ? "text-[#00bfff] underline" : "";

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={menuRef}
      className="z-50 lg:h-[7rem] flex items-center justify-between sticky w-screen backdrop-filter backdrop-blur-lg bg-opacity-40 p-4 navbar"
    >
      <style>
        {`@import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');`}
      </style>
      <button
        className="block md:hidden p-2 mx-0 my-0 w-full"
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <a
          href="/"
          className="mr-[12rem] md:hidden text-white text-2xl font-bold"
        >
          TimeWarp
        </a>
        {!isMenuOpen ? (
          <i className="ri-menu-line text-white text-2xl"></i>
        ) : (
          <i className="fa-solid fa-xmark text-2xl"></i>
        )}
      </button>
      <ul
        className={`absolute bg-black opacity-80 gap-5 md:relative top-full left-0 md:left-auto md:top-auto w-full md:flex md:items-center md:justify-center md:bg-transparent transition-all duration-500 ease-in-out navbar-list ${
          isMenuOpen ? "navbar-list-active" : ""
        } flex-col md:flex-row list-none m-0 p-0 gap-x-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl`}
      >
        <li className="text-center md:text-left">
          <NavLink to="/" className={isActive("/")} onClick={handleLinkClick}>
            <i className="ri-home-fill"></i> Home
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <NavLink
            to="/AboutUs"
            className={isActive("/AboutUs")}
            onClick={handleLinkClick}
          >
            <i className="ri-building-fill"></i> About Us
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <NavLink
            to="/DemoSection"
            className={isActive("/DemoSection")}
            onClick={handleLinkClick}
          >
            <i className="ri-service-fill"></i> Demo Section
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <NavLink
            to="/Models"
            className={isActive("/Models")}
            onClick={handleLinkClick}
          >
            <i className="ri-layout-2-fill"></i> Models
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <NavLink
            to="/ContactUs"
            className={isActive("/ContactUs")}
            onClick={handleLinkClick}
          >
            <i className="ri-customer-service-2-fill"></i> Contact Us
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
