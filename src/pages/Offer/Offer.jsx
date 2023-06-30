import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Offer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GoogleMapsImage from "../../assets/google-maps-image.jpg";

const Offer = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [persons, setPersons] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState(0);
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();

    // Validate if departure and destination are set
    if (departure && destination && departureDate && departureTime && persons) {
      // Show a success toast notification
      toast.success("Offer Seats successful!");

      // Navigate to "/offer/settime" route
      navigate("/");
    } else {
      // Show an error toast notification
      toast.error("Please fill all the inputs  ");
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="titres">Add Trip</h1>
      <div className="offer-container">
        <div className="input-container">
          <div className="input-group">
            <FiMapPin className="form-icon" />
            <input
              type="text"
              value={departure}
              onChange={(event) => setDeparture(event.target.value)}
              placeholder="Departure"
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
              placeholder="Departure Date"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiClock className="form-icon" />
            <input
              type="time"
              value={departureTime}
              onChange={(event) => setDepartureTime(event.target.value)}
              placeholder="Departure Time"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <FiUsers className="form-icon" />
            <input
              type="number"
              value={persons}
              onChange={(event) => setPersons(event.target.value)}
              placeholder="Person"
              className="form-input"
            />
          </div>
        </div>

        <div className="google-maps-image-container">
          <img
            src={GoogleMapsImage}
            alt="Google Maps"
            className="google-maps-image"
          />
        </div>
      </div>
      <button type="submit" className="OfferBtn" onClick={handleNext}>
        Offer Seats
      </button>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Offer;
