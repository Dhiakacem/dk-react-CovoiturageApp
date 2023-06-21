import React from "react";
import "./Proprity.css";
import logo from "./search.svg";

const Proprity = () => {
  return (
    <div className="imageTextContainer">
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <img src={logo} alt="Image" className="imageTextImage" />
        </div>
        <div className="imageTextContent">
          <p>
            Join our carpooling community today and make a positive impact on
            your daily commute. Together, we can create a more sustainable and
            connected world while enjoying the benefits of cost savings, reduced
            stress, and social connections. Start carpooling with us and
            experience a smarter way to travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proprity;
