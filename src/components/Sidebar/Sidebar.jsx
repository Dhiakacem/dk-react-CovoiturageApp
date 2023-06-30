import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaClock,
  FaStar,
  FaCar,
  FaChair,
  FaSnowflake,
  FaSmoking,
} from "react-icons/fa";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="sidebars">
      <h2 className="sidebar-heading">Trier par</h2>
      <ul className="menu">
        <li
          className={`menu-item ${
            selectedOption === "departure" ? "selected" : ""
          }`}
        >
          <label>
            Départ le plus tôt
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
            {" "}
            Prix le plus bas
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
            {" "}
            Proche du point de départ
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
            {" "}
            Proche du point d’arrivée
            <input
              type="radio"
              name="sortOption"
              value="endPoint"
              checked={selectedOption === "endPoint"}
              onChange={() => handleOptionChange("endPoint")}
            />
          </label>
        </li>
        <li
          className={`menu-item ${
            selectedOption === "shortestTrip" ? "selected" : ""
          }`}
        >
          <label>
            {" "}
            Trajet le plus court
            <input
              type="radio"
              name="sortOption"
              value="shortestTrip"
              checked={selectedOption === "shortestTrip"}
              onChange={() => handleOptionChange("shortestTrip")}
            />
          </label>
        </li>
        <li className="menu-item sub-menu-item">
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
                {" "}
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
                {" "}
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
                {" "}
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
          <h3 className="sub-menu-heading">
            <FaCar className="sub-menu-icon" /> Services et équipements
          </h3>
          <ul className="sub-menu">
            <li
              className={`sub-menu-item ${
                selectedOption === "superDriver" ? "selected" : ""
              }`}
            >
              <label>
                {" "}
                <FaStar className="sub-menu-icon" /> Super Driver
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
                selectedOption === "rearSeats" ? "selected" : ""
              }`}
            >
              <label>
                {" "}
                <FaChair className="sub-menu-icon" /> Max. 2 à l'arrière
                <input
                  type="checkbox"
                  value="rearSeats"
                  checked={selectedOption === "rearSeats"}
                  onChange={() => handleOptionChange("rearSeats")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "smokingAllowed" ? "selected" : ""
              }`}
            >
              <label>
                {" "}
                <FaSmoking className="sub-menu-icon" /> Cigarette autorisée
                <input
                  type="checkbox"
                  value="smokingAllowed"
                  checked={selectedOption === "smokingAllowed"}
                  onChange={() => handleOptionChange("smokingAllowed")}
                />
              </label>
            </li>
            <li
              className={`sub-menu-item ${
                selectedOption === "airConditioning" ? "selected" : ""
              }`}
            >
              <label>
                {" "}
                <FaSnowflake className="sub-menu-icon" /> Climatisation
                <input
                  type="checkbox"
                  value="airConditioning"
                  checked={selectedOption === "airConditioning"}
                  onChange={() => handleOptionChange("airConditioning")}
                />
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
