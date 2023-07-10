import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "./Offer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GoogleMapsImage from "../../assets/google-maps-image.jpg";
import { FaSmoking, FaSnowflake } from "react-icons/fa";

const Offer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [persons, setPersons] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const handlePopupOpen = (event) => {
    event.preventDefault();
    setPopupOpen(true);
  };

  const handleNext = (event) => {
    event.preventDefault();

    // Validate if departure and destination are set
    if (departure && destination && departureDate && departureTime && persons) {
      // Show a success toast notification
      toast.success("Places offertes avec succès !");

      // Navigate to "/offer/settime" route
      navigate("/");
    } else {
      // Show an error toast notification
      toast.error("Veuillez remplir tous les champs !");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success("Formulaire soumis avec succès !");

    setPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <h1 className="titres">Ajouter un trajet</h1>
      <div className="offer-container">
        <div className="input-container">
          <div className="input-group">
            <FiMapPin className="form-icon" />
            <input
              type="text"
              value={departure}
              onChange={(event) => setDeparture(event.target.value)}
              placeholder="Départ"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiMapPin className="form-icon" />
            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Destination"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiCalendar className="form-icon" />
            <input
              type="date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
              placeholder="Date de départ"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiClock className="form-icon" />
            <input
              type="time"
              value={departureTime}
              onChange={(event) => setDepartureTime(event.target.value)}
              placeholder="Heure de départ"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiUsers className="form-icon" />
            <input
              type="number"
              value={persons}
              onChange={(event) => setPersons(event.target.value)}
              placeholder="Nombre de personnes"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <button type="submit" className="hh" onClick={handlePopupOpen}>
              Suivant
            </button>
          </div>
        </div>
        <Popup open={popupOpen} onClose={() => setPopupOpen(false)} modal>
          <div className="popup-content">
            <h2 className="popup-title">Sélectionnez votre option</h2>
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="option">
                <label>
                  <input
                    type="checkbox"
                    value="option1"
                    onChange={() => setSelectedOption("option1")}
                  />
                  <FaSnowflake className="option-icon" />
                  <span className="option-label">Climatisation</span>
                </label>
              </div>
              <div className="option">
                <label>
                  <input
                    type="checkbox"
                    value="option2"
                    onChange={() => setSelectedOption("option2")}
                  />
                  <FaSmoking className="option-icon" />
                  <span className="option-label">Fumeurs autorisés</span>
                </label>
              </div>
              <button type="submit" className="submit-button">
                Soumettre
              </button>
            </form>
          </div>
        </Popup>
        <div className="google-maps-image-container">
          <img
            src={GoogleMapsImage}
            alt="Google Maps"
            className="google-maps-image"
          />
        </div>
      </div>
      <button type="submit" className="OfferBtn" onClick={handleNext}>
        Ajouter
      </button>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Offer;
