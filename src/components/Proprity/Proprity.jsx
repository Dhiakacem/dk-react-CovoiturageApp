import React from "react";
import "./Proprity.css";
import logo from "./cars.jpg";

const Proprity = () => {
  return (
    <div className="imageTextContainer">
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <img src={logo} alt="back" className="imageTextImage" />
        </div>
        <div className="imageTextContent">
          <p>
            Rejoignez notre communauté de covoiturage dès aujourd'hui et ayez un
            impact positif sur votre trajet quotidien. Ensemble, nous pouvons
            créer un monde plus durable et connecté tout en bénéficiant
            d'économies de coûts, d'une réduction du stress et de connexions
            sociales. Commencez le covoiturage avec nous et découvrez un moyen
            plus intelligent de voyager.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proprity;
