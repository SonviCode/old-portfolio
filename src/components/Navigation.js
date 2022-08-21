import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li><span>Accueil</span><i className="fa-solid fa-house"></i></li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li><span>À propos</span><i className="fa-solid fa-address-card"></i></li>
                </NavLink>
                <NavLink to="/projet" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li><span>Projets</span><i className="fa-solid fa-chart-line"></i></li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li><span>Contact</span><i className="fa-solid fa-envelope"></i></li>
                </NavLink>
            </ul>
            
        </nav>
    );
};

export default Navigation;