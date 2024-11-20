import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Adventurer's Archive</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Create New Character</a></li>
                <li className='expanding-menu'><a href="#about">Character Details</a>
                    <ul className="submenu">
                        <li>Classes</li>
                        <li>Races</li>
                    </ul></li>
            </ul>
        </nav>
    );
};

export default Navbar;