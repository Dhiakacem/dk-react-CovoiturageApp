import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSignOutAlt, FaHome, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import logo from "./logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
              <Link to="/" className="nav-link" onClick={toggleNavbar}>
                <FaHome className="nav-icon" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Offer" className="nav-link" onClick={toggleNavbar}>
                <FaPlus className="nav-icon" />
                Add Trip
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/Profile" className="nav-link" onClick={toggleNavbar}>
                <FaUser className="nav-icon" />
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons-container">
          <div className="navbar-icons">
            <Link to="/Search" className="nav-link" onClick={toggleNavbar}>
              <FaSearch className="nav-icon" />
              Search
            </Link>
            <Link to="/SignUp" className="nav-link" onClick={toggleNavbar}>
              <FaSignOutAlt className="icon" />
            </Link>
          </div>
        </div>
        {/*   <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`toggle-icon ${isOpen ? "open" : ""}`}></span>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
