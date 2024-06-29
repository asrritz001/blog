import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
        <ul>
            <li><Link to="/Home"> Home Page</Link></li>
            <li><Link to="/Form">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Help</Link> </li>
            <li className="buttons">
                    <Link to="/Signin" className="button">Login</Link>
            </li>
           
        </ul>
        
        
        </div>
    );

}

export default Navbar;