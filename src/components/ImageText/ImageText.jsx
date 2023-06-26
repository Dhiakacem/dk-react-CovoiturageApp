import React from "react";
import "./ImageText.css";
import logo from "./car.jpg";
import second from "./11.jpg";

const ImageText = () => {
  return (
    <div className="imageTextContainer">
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <img src={logo} alt="back" className="imageTextImage" />
        </div>
        <div className="imageTextContent">
          <p>
            Welcome to our carpooling platform, where convenience meets
            sustainability. Our website is dedicated to connecting individuals
            who are looking to share rides, reduce their carbon footprint, and
            save money on transportation expenses. Our platform provides user
            profiles and ratings.
          </p>
        </div>
      </div>
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <p>
            Our website offers advanced search filters, allowing you to find
            carpool partners based on your specific preferences. You can search
            for rides based on your starting point, destination, and desired
            departure. You can also specify your preferences for the number of
            passengers, Air Condition preferences, and more.
          </p>
        </div>
        <div className="imageTextContent">
          <img src={second} alt="back" className="imageTextImage" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
