import React, { useState } from "react";
import "./Trajet.css";

const Trajet = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const cards = [
    { departure: "New York", arrival: "Los Angeles" },
    { departure: "London", arrival: "Paris" },
    { departure: "Tokyo", arrival: "Tunis" },
    { departure: "Dubai", arrival: "Cairo" },
  ];

  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="featureds-container">
      <h3 className="title">Mes Voyages...</h3>
      <div className="card-container">
        {displayedCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="departure-arrival">
              <span className="departure">{card.departure}</span>
              <span className="arrow">&rarr;</span>
              <span className="arrival">{card.arrival}</span>
            </div>
          </div>
        ))}
      </div>
      {!showAll ? (
        <button className="show-more-button" onClick={toggleShowAll}>
          Afficher plus
        </button>
      ) : (
        <button className="show-more-button" onClick={toggleShowAll}>
          Afficher moins
        </button>
      )}
    </div>
  );
};

export default Trajet;
