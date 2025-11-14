import React from 'react';
import {link} from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return(
        <nav className= "navbar">
            <h2 className= "logo"> MyApp </h2>
            <ul className= "nav-links">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/contact"> Contact us </Link></li>
                <li><Link to= "/about">About us</Link></li>
            </ul>
        </nav>
    );
};