import React from "react";
import "./Tags.css";
import goldMedalIcon from "./gold-middle.png";
import silverMedalIcon from "./silver-icon.png";
import bronzeMedalIcon from "./bronze-medal.png";

const Tags = () => {
  const cards = [
    {
      id: 1,
      nom: "John",
      nomDeFamille: "Doe",
      description: "Passionné de voyages de New York",
      note: 4.8,
    },
    {
      id: 2,
      nom: "Loeem",
      nomDeFamille: "ipsum",
      description: "Passionné de voyages de New York",
      note: 4.0,
    },
    {
      id: 3,
      nom: "John",
      nomDeFamille: "Doe",
      description: "Passionné de voyages de New York",
      note: 3.2,
    },
  ];

  const cartesAffichees = cards.slice(0, 3);

  const renderEtoiles = (note) => {
    const etoilesRemplies = Math.floor(note);
    const aDemiEtoile = note % 1 !== 0;

    const etoiles = [];

    for (let i = 0; i < etoilesRemplies; i++) {
      etoiles.push(<span key={i} className="etoile remplie" />);
    }

    if (aDemiEtoile) {
      etoiles.push(<span key="moitie" className="etoile moitie" />);
    }

    return etoiles;
  };

  return (
    <div className="conteneur-principal">
      <h3 className="title">Top 3 profils ce week-end</h3>
      <div className="conteneur-tags">
        {cartesAffichees.map((carte, index) => (
          <div className={`carte position-${index + 1}`} key={carte.id}>
            {index === 0 && (
              <div className="medaille medaille-or">
                <img src={goldMedalIcon} alt="Médaille d'or" />
              </div>
            )}
            {index === 1 && (
              <div className="medaille medaille-argent">
                <img src={silverMedalIcon} alt="Médaille d'argent" />
              </div>
            )}
            {index === 2 && (
              <div className="medaille medaille-bronze">
                <img src={bronzeMedalIcon} alt="Médaille de bronze" />
              </div>
            )}
            <div className="profil-utilisateur">
              <div className="nom-utilisateur">
                {carte.nom}
                <div>{carte.nomDeFamille}</div>
              </div>
            </div>
            <div className="description">{carte.description}</div>
            <div className="note">{renderEtoiles(carte.note)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
