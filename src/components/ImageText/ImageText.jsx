import React from "react";
import "./ImageText.css";
import logo from "./car.jpg";
import second from "./11.jpg";

const ImageText = () => {
  return (
    <div className="imageTextContainer">
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <img src={logo} alt="arrière" className="imageTextImage" />
        </div>
        <div className="imageTextContent">
          <p>
            Bienvenue sur notre plateforme de covoiturage, où la commodité
            rencontre la durabilité. Notre site web est dédié à la mise en
            relation de personnes qui souhaitent partager des trajets, réduire
            leur empreinte carbone et économiser de l'argent sur les frais de
            transport. Notre plateforme propose des profils d'utilisateurs et
            des évaluations.
          </p>
        </div>
      </div>
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <p>
            Notre site web propose des filtres de recherche avancés, vous
            permettant de trouver des partenaires de covoiturage en fonction de
            vos préférences spécifiques. Vous pouvez rechercher des trajets en
            fonction de votre point de départ, de votre destination et de
            l'heure de départ souhaitée. Vous pouvez également spécifier vos
            préférences pour le nombre de passagers, les préférences de
            climatisation, et plus encore.
          </p>
        </div>
        <div className="imageTextContent">
          <img src={second} alt="arrière" className="imageTextImage" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
