import React from "react";
import { Link } from "react-router-dom";
import { FaSnowflake, FaSmoking, FaLongArrowAltRight } from "react-icons/fa";
import "./ListItem.css";

const ListItem = (selectedOption) => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      price: "10",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "9:00 AM",
      arrivalTime: "11:00 AM",
      user: "Lorem Ipsum",
      status: "Disponible",
    },
    {
      id: 3,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      user: "John Doe",
      status: "Disponible",
    },
    {
      id: 4,
      name: "Item 2",
      price: "$25",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "08:00 AM",
      arrivalTime: "10:30 PM",
      user: "John Doe",
      status: "Disponible",
    },
    {
      id: 5,
      name: "Item 2",
      price: "$19",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "06:00 AM",
      arrivalTime: "07:45 PM",
      user: "John Doe",
      status: "En cour",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$15",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "10:00 AM",
      arrivalTime: "11:30 PM",
      user: "John Doe",
      status: "Annuler",
    },
    {
      id: 7,
      name: "Item 2",
      price: "$10",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "14:00 AM",
      arrivalTime: "15:30 PM",
      user: "John Doe",
      status: "Annuler",
    },
  ];

  const filteredItems = items.filter((item) => {
    if (selectedOption === "price") {
      return item.price === "$15";
    } else if (selectedOption === "departure") {
      return item.departureTime === "9:00 AM";
    } else {
      return true;
    }
  });

  const getStatus = (status) => {
    if (status === "Disponible") {
      return (
        <span className="itemcard-status itemcard-status-available">
          Disponible
        </span>
      );
    } else if (status === "Annuler") {
      return (
        <span className="itemcard-status itemcard-status-cancelled">
          Annuler
        </span>
      );
    } else if (status === "En cour") {
      return (
        <span className="itemcard-status itemcard-status-in-progress">
          En cour
        </span>
      );
    }
  };

  const handleClick = (e, status) => {
    if (status === "Annuler") {
      e.preventDefault();
    }
  };

  return (
    <div className="itemcard-container">
      <div className="itemcard-info">
        <div className="itemcard-available">
          <span className="available-label">trajets disponibles :</span> 14
        </div>
      </div>

      <div className="itemcard-pairs">
        {items.map((item, index) => (
          <div className="itemcard-pair" key={item.id}>
            <Link
              to="/Covoiturage/save"
              className="itemcard-link"
              onClick={(e) => handleClick(e, item.status)}
            >
              <div
                className={`itemcard ${
                  item.status === "Annuler" ? "disabled" : ""
                }`}
              >
                <div className="itemcard-header">
                  <div className="itemcard-image-container">
                    {getStatus(item.status)}
                  </div>
                  <div className="itemcard-price">{item.price}</div>
                </div>
                <div className="itemcard-details">
                  <div className="itemcard-location">
                    <ul>
                      <li>
                        <span className="location-icon">&#128205;</span>
                        {item.place}
                      </li>
                      <li>
                        <span className="location-icon">&#9201;</span>
                        {item.departureTime}
                      </li>
                    </ul>
                  </div>
                  <span className="arrow-icon">
                    <FaLongArrowAltRight />
                  </span>
                  <div className="itemcard-location">
                    <ul>
                      <li>
                        <span className="location-icon">&#128205;</span>
                        {item.arrive}
                      </li>
                      <li>
                        <span className="location-icon">&#9201;</span>
                        {item.arrivalTime}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="itemcard-users">
                  <div className="itemcard-user">
                    <span className="user-icon">&#129333;</span>
                    {item.user}
                  </div>
                  <div className="itemcard-icons">
                    <FaSnowflake />
                    <FaSmoking />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
