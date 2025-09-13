import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // 👈 added
import "./Navbar.css";
import logoImage from "../assets/logo.png";

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <nav
        className={
          transparent ? "navbar-container transparent" : "navbar-container solid"
        }
      >
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logoImage} alt="My Brand Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <NavLink className={(e) => (e.isActive ? "red" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={(e) => (e.isActive ? "red" : "")} to="/Artists">
              Artists
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "red" : "")}
              to="/Exhibitions"
            >
              Exhibitions
            </NavLink>
          </li>
          <li>
            <NavLink className={(e) => (e.isActive ? "red" : "")} to="/about">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink className={(e) => (e.isActive ? "red" : "")} to="/Services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "red" : "")}
              to="/ArtistRepresentation"
            >
              Artist Representation
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "red" : "")}
              to="/ArtTherapy"
            >
              Art Therapy
            </NavLink>
          </li>
          <li>
            <NavLink className={(e) => (e.isActive ? "red" : "")} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="mobile-nav-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="close-btn" onClick={closeMenu}>✕</div>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Artists" onClick={closeMenu}>
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink to="/Exhibitions" onClick={closeMenu}>
                Exhibitions
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/ArtistRepresentation" onClick={closeMenu}>
                Artist Representation
              </NavLink>
            </li>
            <li>
              <NavLink to="/ArtTherapy" onClick={closeMenu}>
                Art Therapy
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
