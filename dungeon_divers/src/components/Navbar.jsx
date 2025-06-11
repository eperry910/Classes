import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Adventurer's Archive</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/CharacterCreator">Create New Character</a></li>
                <li><a href="/Characters">View Characters</a></li>
                <li className="expanding-menu">
                    <a href="#about">Learn More About 5e</a>
                    <div className="submenu-box">
                        <ul className="submenu">
                            <li>Classes</li>
                            <li>Races</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;