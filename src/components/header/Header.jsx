import {
  faArrowAltCircleRight,
  faCalendarDays,
  faCar,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";

const Header = ({ type }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    person: 1,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [numHommes, setNumHommes] = useState(0);
  const [numFemmes, setNumFemmes] = useState(0);

  const handleNumHommesChange = (e) => {
    setNumHommes(parseInt(e.target.value));
  };

  const handleNumFemmesChange = (e) => {
    setNumFemmes(parseInt(e.target.value));
  };

  const handleSearch = () => {
    navigate("/signup");
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {type !== "list" && (
          <>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="headerIcon"
                />
                <div className="headerSearchItemCenter">
                  <input
                    type="text"
                    placeholder="Départ"
                    className="headerSearchInput"
                  />
                </div>
                <FontAwesomeIcon icon={faCar} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MM/dd/yyyy"
                  className="headerDatePicker"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {" "}
                  Person{" "}
                </span>
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Hommes</span>
                    <div className="optionCounter">
                      <Form.Control
                        type="number"
                        min={0}
                        value={numHommes}
                        onChange={handleNumHommesChange}
                          
                      />
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Femmes</span>
                    <div className="optionCounter">
                      <Form.Control
                        type="number"
                        min={0}
                        value={numFemmes}
                        onChange={handleNumFemmesChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
