import React, { useState } from "react";
import "./Navbar.css";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <div className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>

      

       <div className="navbar-logo">Kalyan Emporium</div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Service</a>
        <a href="#workers">Best</a>
        <a href="#what-we-do">Do</a>
        <a href="#contact">Contact</a>
      
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

  

    </div>
    

  );
}

export default Navbar;
