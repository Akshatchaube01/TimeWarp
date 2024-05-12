import { useRef } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    const listRef = useRef();

    const onToggle = () => {
        listRef.current.classList.toggle("navbar-list-active");
    };
    return (
        <>
            <nav className="navbar">
                <button className="navbar__toggle" onClick={onToggle}></button>
                <ul className="navbar-list" ref={listRef}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/DemoSection">Demo Section</Link></li>
                    <li><Link to="/Models">Models</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
export default Navbar;
