import React from 'react';
import { Route, BrowserRouter as Router, Routes } from"react-router-dom";
import Home from './comonents/Home';
import Navbar from './comonents/Navbar';
import Footer from './comonents/Footer';
import About from './comonents/About';
import Services from './comonents/Services';
import Form from './comonents/Form';
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
        </Routes>
        <Footer/>
  
    </div>
    </Router>
     
  
  );
}

export default App;
