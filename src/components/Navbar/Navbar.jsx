import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaSignOutAlt,
  FaHome,
  FaPlus,
  FaSearch,
  FaUser,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import logo from "./logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img alt="" src={logo} className="navbar-icon" />
        </Link>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                <FaHome className="nav-icon" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Offer" className="nav-link" >
                <FaPlus className="nav-icon" />
                Add Trip
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/search" className="nav-link" >
                <FaSearch className="nav-icon" />
                Recherche
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-icons-container">
          <div className="navbar-icons">
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleNavbar}>
                <LuMenu className="nav-ic" />
              </button>
              {isOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/Profile"
                    className="dropdown-link"
                    onClick={closeNavbar}
                  >
                    <FaUser className="dropdown-icon" />
                    Profile
                  </Link>
                  <hr className="dropdown-line" />
                  <Link
                    to="/SignUp"
                    className="dropdown-link"
                    onClick={closeNavbar}
                  >
                    <FaSignOutAlt className="dropdown-icon" />
                    Logout
                  </Link>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
