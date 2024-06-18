import React, { useState } from 'react';
import logo from '../img2/logo.webp';
import '../styles/style.css';
import '../main.js';

function Head() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="#" className="logo"><img src={logo} alt=""/></a>
      <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>
      {/* Conditional rendering of menu based on isMenuOpen state */}
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#regions">Regions</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Head;