import React from 'react';
import "./Navbar.css"
function Navbar(props) {
    return (
        <nav>
            <a href=""><img src="TBCLogo.svg" alt="TBCLogo"/></a>
            <div id="links">
            <p className="navLinks">მთავარი</p>
                <p className="navLinks">TBC IT</p>
                <p className="navLinks currentPage">TBC x USAID</p>
                <p className="navLinks">რისკები</p>
            </div>
        </nav>
    );
}

export default Navbar;