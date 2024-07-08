import React from 'react';
import { Route, BrowserRouter as Router, Routes } from"react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Form from './components/Form';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import CreateBlog from './components/Createblog';
import Post from './components/Post';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';
import UserProfile from './components/UserProfile';

import Signup from './components/Signup';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  const handleSignout=() =>{
    auth.signOut() ;
      setIsAuthenticated(false);
     
  };
  return (
    
       <Router>
        
        <div className="App">
          <div className='navbar'>
            <ul>
           <li><Link to="/Home"> Home </Link></li>
            <li><Link to="/Form">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Help</Link> </li>
             {isAuthenticated && <li><Link to="/createblog">Create Blog</Link></li>}
             {!isAuthenticated &&<li className="buttons">
                    <Link to="/Signin" className="button">SIGN IN</Link>
            </li>}
            {isAuthenticated &&<li className='buttons'>
              <Link to="/" className='button' onClick={handleSignout}> SIGN OUT</Link></li>}
            </ul> 
            </div>
      
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path= "/Services" element={<Services/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path= "/Createblog" element={ isAuthenticated ?<CreateBlog/> :<navigate to ="/Signin"/>}/>
        <Route path= "/Forgotpassword" element={<ForgotPassword/>}/> 
        <Route path= "/Post" element={<Post/>}/>
        <Route path= "/Signup" element={<Signup/>}/>
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path='/' element={<Navigate to ="/Home"/>}> </Route>
        </Routes>
        <Footer/>
  
    </div>
    </Router>
     
  
  );
}

export default App;
