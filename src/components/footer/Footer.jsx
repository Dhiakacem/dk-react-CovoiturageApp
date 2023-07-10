import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </Link>

        <div className="footer-section">
          <h3 className="footer-heading">Nos services</h3>
          <ul className="footer-links">
            <li className="footer-link">Covoiturage régulier</li>
            <li className="footer-link">Covoiturage occasionnel</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Comment ça marche</h3>
          <ul className="footer-links">
            <li className="footer-link">Trouver un trajet</li>
            <li className="footer-link">Réserver un trajet</li>
            <li className="footer-link">Proposer un trajet</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text">
          Copyright © 2023. Veo Worldwide Services{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
