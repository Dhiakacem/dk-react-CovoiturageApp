import {
  faArrowAltCircleRight,
  faCar,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const Header = ({ type }) => {
  const [personCount, setPersonCount] = useState(0);

  const handlePersonChange = (e) => {
    let count = parseInt(e.target.value);
    if (isNaN(count)) {
      count = "";
    } else if (count < 0) {
      count = 0;
    } else if (count > 4) {
      count = 4;
    }
    setPersonCount(count);
  };

  return (
   
    <div className="header">
    <div className="headerContainer">
      <form className="search-form">
        <div className="input-container">
          <input type="text" placeholder="De" name="from" required />
        </div>
        <div className="input-container">
          <input type="text" placeholder="À" name="to" required />
        </div>
        <div className="input-container">
          <input type="date" placeholder="Date" name="date" required />
        </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="Personnes"
            name="person"
            min=" "
            max="4"
            required
          />
        </div>
        <button className="headerBtn">Rechercher</button>
      </form>
    </div>
  </div>
);
};

export default Header;
