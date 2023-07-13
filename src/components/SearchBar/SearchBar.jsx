import React, { useState } from "react";
import {
  faArrowAltCircleRight,
  faCalendarDays,
  faCar,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.css";
import { Link } from "react-router-dom";

function SearchBar() {
  const [personCount, setPersonCount] = useState(0);

  const handlePersonChange = (e) => {
    let count = parseInt(e.target.value);
    if (isNaN(count)) {
      count = 0;
    } else if (count < 0) {
      count = 0;
    } else if (count > 4) {
      count = 4;
    }
    setPersonCount(count);
  };

  return (
    <div className="Search-container">
      <h3 className="title">Où allez-vous ?</h3>
      <div className="containers">
        <form className="search-form">
          <div className="input-container">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="input-icon"
            />
            <input type="text" placeholder="De" name="from" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faCar} className="input-icon" />

            <input type="text" placeholder="À" name="to" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faCalendarDays} className="input-icon" />

            <input type="date" placeholder="Date" name="date" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faPerson} className="input-icon" />
            <input
              type="text"
              placeholder="Personne"
              name="person"
              min="0"
              max="4"
              value={personCount}
              onChange={handlePersonChange}
              required
            />
          </div>
          <div className="headerSearchItem">
            <Link to="/covoiturage">
            <button className="headerBtn">Rechercher</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
