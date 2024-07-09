
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
        <div class="page-title">
        <p class="page-description">
        Welcome to Inspire

       Explore, Learn, and Share your Ideas
       Begin your journey into the world of Inspire with us. Whether you're here to read,
       write, or connect with others,you're in the right place. Join our community and start 
       creating today!.</p>
        </div>
        </div>
    </div>
  )
}
export default Home;

