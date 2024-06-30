import React from 'react';
import { Route, BrowserRouter as Router, Routes } from"react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Form from './components/Form';
import Signin from './components/Signin';
import Signup from './components/Signup';
import './App.css';


function App() {
  return (
    
       <Router>
        <div className="App">
        <Navbar />
        <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path= "/Services" element={<Services/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Signin" element={<Signin/>}/>
        <Route path= "/Signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
  
    </div>
    </Router>
     
  
  );
}

export default App;
