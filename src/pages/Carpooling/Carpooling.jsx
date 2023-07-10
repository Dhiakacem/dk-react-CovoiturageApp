import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCar,
  FaClock,
  FaBan,
  FaUsers,
} from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Carpooling.css";

const Carpooling = () => {
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const departureTime = getRandomTime();
  const destinationPlace = "New York";

  const userProfile = {
    name: "John Doe",
    description: "Passionate traveler",
    note: 4.8,
    prix: "15$",
  };

  const renderStars = (note) => {
    const filledStars = Math.floor(note);
    const hasHalfStar = note % 1 !== 0;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<IoMdStar key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<IoMdStarOutline key="half" className="star half" />);
    }

    return stars;
  };

  const handleValiderClick = () => {
    toast.success("Validation successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Navbar />
      <h2>Mar, 11 juillet</h2>
      <div className="CarContainer">
        <div className="firstCard">
          <div className="cardicon">
            <FaCar />
          </div>
          <div className="carddetails">
            <div className="cardinfo">
              <FaClock className="cardinfoicon" />
              <span>Temps de depart {departureTime}</span>
            </div>
            <div className="trajet">-----</div>
            <div className="cardinfo">
              <FaMapMarkerAlt className="cardinfoicon" />
              <span>{destinationPlace}</span>
            </div>
          </div>
        </div>

        <div className="Carcard">
          <div className="profileinfo">
            <div className="profiletext">
              <FaUser className="option-icon" />
              <div className="profilename">{userProfile.name}</div>
              <div className="profiledescription">
                {userProfile.description}
              </div>
              <div className="profilerating">
                {renderStars(userProfile.note)}
              </div>
            </div>
          </div>
          <div className="profilecard">
            <div className="profileoptions">
              <div className="option">
                <FaUsers className="option-icon" />
                <span className="option-text">Max 2 seats arriere</span>
              </div>
              <div className="option">
                <FaBan className="option-icon ban" />
                <span className="option-text">Non fumer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CenterPrice">
        <div className="CarLine"></div>
        <div className="middle-line">
          <span className="line-label">Prix Totale pour 1 passager:</span>
          <span className="line-price">{userProfile.prix}</span>
        </div>
        <div className="CarLine"></div>
      </div>
      <button className="validerbutton" onClick={handleValiderClick}>
        Valider
      </button>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Carpooling;
