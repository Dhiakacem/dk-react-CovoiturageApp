import {
  faArrowAltCircleRight,
  faCar,
  faPerson,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic or any other actions here
    // ...
    // Redirect or navigate to the desired page
    navigate("/covoiturage");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="input-container">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className="input-icon"
            />
            <input type="text" placeholder="From" name="from" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faCar} className="input-icon" />
            <input type="text" placeholder="To" name="to" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faCalendarDays} className="input-icon" />
            <input type="date" placeholder="Date" name="date" required />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faPerson} className="input-icon" />
            <input
              type="text"
              placeholder="Person"
              name="person"
              min="0"
              max="4"
              required
            />
          </div>
          <div className="headerSearchItem">
            <Link to="/covoiturage">
              <button className="headerBtn">Rechercher</button>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
