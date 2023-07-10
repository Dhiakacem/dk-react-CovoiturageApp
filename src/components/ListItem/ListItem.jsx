import React from "react";
import { Link } from "react-router-dom";
import { FaSnowflake, FaSmoking, FaLongArrowAltRight } from "react-icons/fa";
import "./ListItem.css";

const ListItem = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      price: "$15",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "9:00 AM",
      arrivalTime: "11:00 AM",
      user: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      user: "John Doe",
    },
    {
      id: 3,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      user: "John li",
    },
    {
      id: 4,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 5,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
    {
      id: 6,
      name: "Item 2",
      price: "$20",
      place: "Paris",
      arrive: "Lyon",
      departureTime: "12:00 AM",
      arrivalTime: "2:00 PM",
      user: "User ",
    },
  ];

  const getSystemDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
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
            <Link to="/Covoiturage/save" className="itemcard-link">
              <div className="itemcard">
                <div className="itemcard-header">
                  <div className="itemcard-image-container">
                    <span className="itemcard-time">{getSystemDate()}</span>
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
                    <span className="user-icon">&#128100;</span>
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
