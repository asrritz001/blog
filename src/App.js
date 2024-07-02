import React from 'react';
import { Route, BrowserRouter as Router, Routes } from"react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Form from './components/Form';
import Signin from './components/Signin';
//  import ForgotPassword from './components/ForgotPassword';
import './App.css';
import CreateBlog from './components/Createblog';
 import { Link } from "react-router-dom";
 import { useState } from 'react';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  return (
    
       <Router>
        
        <div className="App">
          <div className='navbar'>
            <ul>
           <li><Link to="/Home"> Home </Link></li>
            <li><Link to="/Form">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Help</Link> </li>
             {isAuthenticated && <li><Link to="/create">Create Blog</Link></li>}
            <li className="buttons">
                    <Link to="/Signin" className="button">SIGNIN</Link>
            </li>
            </ul> 
            </div>
      
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path= "/Services" element={<Services/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path= "/Create" element={<CreateBlog/>}/>
        {/* <Route path= "/Signup" element={<ForgotPassword/>}/>  */}
        {/* <Route path= "/forgot-password" element={<ForgotPassword/>}/> */}
        </Routes>
        <Footer/>
  
    </div>
    </Router>
     
  
  );
}

export default App;
