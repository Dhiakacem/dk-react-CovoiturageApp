import React, { useState } from "react";
import "./Featured.css";

const Featured = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const cards = [
    { departure: "New York", arrival: "Los Angeles" },
    { departure: "London", arrival: "Paris" },
    { departure: "Tokyo", arrival: "Tunis" },
    { departure: "Dubai", arrival: "Rome    " },
    { departure: "Dubai", arrival: "Cairo" },
    { departure: "Dubai", arrival: "Cairo" },
    { departure: "Dubai", arrival: "Cairo" },
    { departure: "Dubai", arrival: "Cairo" },   
    { departure: "Dubai", arrival: "Cairo" },
    { departure: "Dubai", arrival: "Cairo" },
  ];

  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="featured-container">
      <h3 className="title">Where are you going?</h3>
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
          Show More
        </button>
      ) : (
        <button className="show-more-button" onClick={toggleShowAll}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Featured;
