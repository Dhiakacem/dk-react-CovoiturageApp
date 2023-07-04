import React from "react";
import { FaUser, FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Footer from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Carpooling.css";

const Carpooling = () => {
  const userProfile = {
    name: "John Doe",
    description: "Passionate traveler",
    note: 4.8,
    prix: "15$",
  };

  const carInfo = {
    departure: "New York",
    destination: "Los Angeles",
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
      <SocialLinks />
      <h2>Mar,11 juillet</h2>
      <div className="CarContainer">
        <div className="Carcard">
          <div className="cardicon">
            <FaCar />
          </div>
          <div className="carddetails">
            <div className="card-info">
              <FaMapMarkerAlt className="card-info-icon" />
              <span>{carInfo.departure}</span>
            </div>
            <div className="cardinfo">
              <FaMapMarkerAlt className="cardinfoicon" />
              <span>{carInfo.destination}</span>
            </div>
          </div>
        </div>
        <div className="Carcard">
          <div className="profileinfo">
            <FaUser className="profileicon" />
            <div className="profiletext">
              <span className="profilename">{userProfile.name}</span>
              <span className="profiledescription">
                {userProfile.description}
              </span>
            </div>
          </div>
          <div className="profilerating">{renderStars(userProfile.note)}</div>
        </div>
      </div>
      <div className="CenterPrice">
        <div className="CarLine"></div>
        <div className="middle-line">
          <span className="line-label">Prix Totale pour 1 passager :</span>
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
