import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./SearchBar.css";

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
      <h3 className="title">Where are you going?</h3>
      <div className="containers">
        <form className="search-form">
          <div className="input-container">
            <input type="text" placeholder="From" name="from" required />
            <FaUser className="input-icon" />
          </div>
          <div className="input-container">
            <input type="text" placeholder="To" name="to" required />
            <FaUser className="input-icon" />
          </div>
          <div className="input-container">
            <input type="date" placeholder="Date" name="date" required />
            <FaUser className="input-icon" />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Person"
              name="person"
              min="0"
              max="4"
              value={personCount}
              onChange={handlePersonChange}
              required
            />
            <FaUser className="input-icon" />
          </div>
          <button type="submit" className="button">Search</button>
        </form>
      </div>
    </div>
  ); 
}

export default SearchBar;
