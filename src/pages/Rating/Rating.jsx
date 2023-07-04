import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Rating.css";
import { FaStar, FaRegStar, FaTimes } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setRating(0);
    setComment("");

    toast.success("Rating submitted successfully!");

    setPopupOpen(false);
  };

  const renderStars = () => {
    const starComponents = [];
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        starComponents.push(
          <FaStar
            key={i}
            className="stars"
            onClick={() => handleRatingChange(i)}
          />
        );
      } else {
        starComponents.push(
          <FaRegStar
            key={i}
            className="stars"
            onClick={() => handleRatingChange(i)}
          />
        );
      }
    }

    return starComponents;
  };

  return (
    <>
      <button onClick={() => setPopupOpen(true)} className="popup-button">
        Open Popup
      </button>

      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} modal>
        <div className="popup-content">
          <h2 className="popup-title">Rate My Service</h2>
          <div className="stars">{renderStars()}</div>
          <form className="form" onSubmit={handleSubmit}>
            <textarea
              className="comment"
              placeholder="Leave a comment..."
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <button className="close-button" onClick={() => setPopupOpen(false)}>
            <FaTimes className="close-icon" />
          </button>
        </div>
      </Popup>

      <ToastContainer />
    </>
  );
};

export default Rating;
