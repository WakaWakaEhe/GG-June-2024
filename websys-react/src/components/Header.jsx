import { useState, useEffect, useRef } from "react";
import logo from "../img2/logo.webp";
import "../styles/style.css";

function Head() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navBarRef = useRef(null);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen((is) => !is);
  };

  const handleScroll = () => {
    menuRef.current.classList.remove("bx-x"); // Ensure the icon resets on scroll (optional)
    navBarRef.current.classList.remove("active"); // Hide the navbar on scroll
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return (
    <header>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href={"/"} className="logo">
        <img src={logo} alt="" />
      </a>
      <div
        ref={menuRef}
        className={`bx bx-menu ${isMenuOpen && "bx-x"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></div>
      {/* Conditional rendering of menu based on isMenuOpen state */}
      <ul ref={navBarRef} className={`navbar ${isMenuOpen && "active"}`}>
        <li>
          <a href={"/"}>Home</a>
        </li>
        <li>
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#regions">Regions</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Head;
