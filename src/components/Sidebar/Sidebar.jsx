import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaClock,
  FaStar,
  FaCar,
  FaSnowflake,
  FaSmoking,
  FaDollarSign,
  FaWalking,
} from "react-icons/fa";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleClearAll = () => {
    setSelectedOption(null);
  };

  return (
    <div className="sidebara">
      <h2 className="sidebar-heading">
        Trier par
        <button className="delete-all" onClick={handleClearAll}>
          Tout effacer
        </button>
      </h2>
      <ul className="menu">
        <li
          className={`menu-item ${
            selectedOption === "departure" ? "selected" : ""
          }`}
        >
          <label>
            <FaClock className="sub-menu-icon" /> Départ le plus tôt
            <input
              type="radio"
              name="sortOption"
              value="departure"
              checked={selectedOption === "departure"}
              onChange={() => handleOptionChange("departure")}
            />
          </label>
        </li>
        <li
          className={`menu-item ${
            selectedOption === "price" ? "selected" : ""
          }`}
        >
          <label>
            <FaDollarSign className="sub-menu-icon" /> Prix le plus bas
            <input
              type="radio"
              name="sortOption"
              value="price"
              checked={selectedOption === "price"}
              onChange={() => handleOptionChange("price")}
            />
          </label>
        </li>
        <li
          className={`menu-item ${
            selectedOption === "startPoint" ? "selected" : ""
          }`}
        >
          <label>
            <FaWalking className="top-menu-icon" /> Proche du point de départ
            <input
              type="radio"
              name="sortOption"
              value="startPoint"
              checked={selectedOption === "startPoint"}
              onChange={() => handleOptionChange("startPoint")}
            />
          </label>
        </li>
        <li
          className={`menu-item ${
            selectedOption === "endPoint" ? "selected" : ""
          }`}
        >
          <label>
            <FaWalking className="top-menu-icon" /> Proche du point d'arrivée
            <input
              type="radio"
              name="sortOption"
              value="endPoint"
              checked={selectedOption === "endPoint"}
              onChange={() => handleOptionChange("endPoint")}
            />
          </label>
        </li>
        <li className="menu-item sub-menu-item">
          <h3 className="line"></h3>
          <h3 className="sub-menu-heading">
            <FaClock className="sub-menu-icon" /> Heure de départ
          </h3>
          <ul className="sub-menu">
            <li
              className={`sub-menu-item ${
                selectedOption === "before6" ? "selected" : ""
              }`}
            >
              <label>
                Avant 06:00
                <input
                  type="checkbox"
                  value="before6"
                  checked={selectedOption === "before6"}
                  onChange={() => handleOptionChange("before6")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "6to12" ? "selected" : ""
              }`}
            >
              <label>
                06:00 - 12:00
                <input
                  type="checkbox"
                  value="6to12"
                  checked={selectedOption === "6to12"}
                  onChange={() => handleOptionChange("6to12")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "12to18" ? "selected" : ""
              }`}
            >
              <label>
                12:01 - 18:00
                <input
                  type="checkbox"
                  value="12to18"
                  checked={selectedOption === "12to18"}
                  onChange={() => handleOptionChange("12to18")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "after18" ? "selected" : ""
              }`}
            >
              <label>
                Après 18:00
                <input
                  type="checkbox"
                  value="after18"
                  checked={selectedOption === "after18"}
                  onChange={() => handleOptionChange("after18")}
                />
              </label>
            </li>
          </ul>
        </li>
        <li className="menu-item sub-menu-item">
          <h3 className="line"></h3>
          <h3 className="sub-menu-heading">
            <FaCar className="sub-menu-icon" /> Services et Options
          </h3>
          <ul className="sub-menu">
            <li
              className={`sub-menu-item ${
                selectedOption === "superDriver" ? "selected" : ""
              }`}
            >
              <label>
                <FaStar className="star-menu-icon" /> Super Conducteur
                <input
                  type="checkbox"
                  value="superDriver"
                  checked={selectedOption === "superDriver"}
                  onChange={() => handleOptionChange("superDriver")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "smokingAllowed" ? "selected" : ""
              }`}
            >
              <label>
                <FaSmoking className="sub-menu-icon" /> Fumeurs autorisés
                <input
                  type="checkbox"
                  value="smokingAllowed"
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "airConditioning" ? "selected" : ""
              }`}
            >
              <label>
                <FaSnowflake className="cli-menu-icon" /> Climatisation
                <input type="checkbox" value="airConditioning" />
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
