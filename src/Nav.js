import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    /* this const navStyle is to change the link color from the regular
    blue hyperlink color to "white". (there is probably an easier way...) */
    };

    return (
        <nav className="Nav">
            <ul className="Navigation">
                <Link style={navStyle} to="/about"><li>About</li></Link>
                <Link style={navStyle} to="/gallery"><li>Gallery</li></Link>
                <Link style={navStyle} to="/contact"><li>Contact</li></Link>
                {/* Link creates a hyper link for the pages and makes them 'clickable'. Like Route, Link needs to be imported and 
            has a to="###" to show the path or what it will hyper link with. */}
            </ul>
        </nav>
    );
}

export default Nav;
