import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "../img2/logo.webp";
import { HashLink } from "react-router-hash-link";

function Head() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navBarRef = useRef(null);

  const location = useLocation();

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
      <HashLink
        to={location.pathname === "/verdida-viola" ? "#" : "/verdida-viola"}
        className="logo"
      >
        <img src={logo} alt="" />
      </HashLink>
      <div
        ref={menuRef}
        className={`bx bx-menu ${isMenuOpen && "bx-x"}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></div>
      {/* Conditional rendering of menu based on isMenuOpen state */}
      <ul ref={navBarRef} className={`navbar ${isMenuOpen && "active"}`}>
        <li>
          <HashLink
            to={location.pathname === "/verdida-viola" ? "#" : "/verdida-viola"}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="#recipes">Recipes</HashLink>
        </li>
        <li>
          <HashLink
            to={
              location.pathname === "/verdida-viola"
                ? "#shop"
                : "/verdida-viola#shop"
            }
          >
            Regions
          </HashLink>
        </li>
        <li>
          <HashLink
            to={
              location.pathname === "/verdida-viola"
                ? "#about"
                : "/verdida-viola#about"
            }
          >
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink
            to={
              location.pathname === "/verdida-viola"
                ? "#contact"
                : "/verdida-viola#contact"
            }
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </header>
  );
}

export default Head;
