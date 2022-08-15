import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/projet" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li>Projet</li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive) ? "nav-active hover" : "hover"}>
                    <li>Contact</li>
                </NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;