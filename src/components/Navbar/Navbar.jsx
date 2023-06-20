import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaBars, FaTimes, FaHome, FaSearch, FaCar , FaUser } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import logo from './logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img alt="" src={logo} className="navbar-icon" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="activated"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <FaHome className="nav-icon" />
                  <span className="nav-text">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  activeClassName="activated"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <FaCar className="nav-icon" />
                  <span className="nav-text">Covoiturage</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  activeClassName="activated"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <FaSearch className="nav-icon" />
                  <span className="nav-text">Recherche</span>
                </NavLink>
              </li>
              <li className="nav-item2">
                <NavLink
                  to="/SignUp"
                  activeClassName="activated"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <FaUser className="nav-icon" />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
