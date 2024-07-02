
import './Home.css';
import { Link } from "react-router-dom";
import React from 'react'


function Home() {
  return (
    <div>
         {/* <div className="navbar">
        <ul>
            <li><Link to="/"> Home Page</Link></li>
            <li><Link to="/Form">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Help</Link> </li>
        </ul> */}
            {/* <button className="btn">Login</button> */}

        {/* </div> */}
        <div className="intro">
        <h1>Create a blog</h1>
        <p>
        Share your story with the world. Create a beautiful, personalized blog that fits your brand.
        Grow your audience with built-in marketing tools, or transform 
        your passion into revenue by gating access with a paywall.</p>
        </div>
      
    </div>
  )
}
export default Home;

