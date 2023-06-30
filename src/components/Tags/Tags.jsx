import React from "react";
import "./Tags.css";
import goldMedalIcon from "./gold-middle.png";
import silverMedalIcon from "./silver-icon.png";
import bronzeMedalIcon from "./bronze-medal.png";

const Tags = () => {
  const cards = [
    {
      id: 1,
      name: "John",
      Lastname: "Doe",
      description: "Travel enthusiast from New York",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Loeem",
      Lastname: "ipsum",
      description: "Travel enthusiast from New York",
      rating: 4.0,
    },
    {
      id: 3,
      name: "John",
      Lastname: "Doe",
      description: "Travel enthusiast from New York",
      rating: 3.2 ,
    },
  ];

  const Mapcards = cards.slice(0, 3);

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half" />);
    }

    return stars;
  };

  return (
    <div className="main-container">
      <h3 className="titre">Top 3 profiles this weekend</h3>
      <div className="Tags-container">
        {Mapcards.map((card, index) => (
          <div className={`cards position-${index + 1}`} key={card.id}>
            {index === 0 && (
              <div className="medal gold-medal">
                <img src={goldMedalIcon} alt="Gold Medal" />
              </div>
            )}
            {index === 1 && (
              <div className="medal silver-medal">
                <img src={silverMedalIcon} alt="Silver Medal" />
              </div>
            )}
            {index === 2 && (
              <div className="medal bronze-medal">
                <img src={bronzeMedalIcon} alt="Bronze Medal" />
              </div>
            )}
            {/*   <span className="card-number">{index + 1}</span> */}
            <div className="user-profile">
              <div className="username">
                {card.name}
                <div>{card.Lastname}</div>
              </div>
            </div>
            <div className="description">{card.description}</div>
            <div className="rating">{renderStars(card.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
