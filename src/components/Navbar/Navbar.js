import React from 'react';
import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <div>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#"><button>Sign Up</button></a></li>
            </ul>
        </div>
    )
}

export default Navbar;