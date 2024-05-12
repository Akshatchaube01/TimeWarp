import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
    const listRef = useRef();

    const onToggle = () => {
        listRef.current.classList.toggle("navbar-list-active");
    };
    return (
        <nav>
            <button className="navbar__toggle" onClick={onToggle}></button>
            <ul className="navbar-list" ref={listRef}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/AboutUs">About Us</a>
                </li>
                <li>
                    <a href="/DemoSection">Demo Section</a>
                </li>
                <li>
                    <a href="/Models">Models</a>
                </li>
                <li>
                    <a href="/ContactUs">Contact Us </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
