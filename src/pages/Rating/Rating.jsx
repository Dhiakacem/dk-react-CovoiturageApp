import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform rating submission logic here
    // You can access the selected rating through the 'rating' state variable
    // and the comment through the 'comment' state variable

    // Reset the form after submission if needed
    setRating(0);
    setComment("");

    // Show toast notification
    toast.success("Rating submitted successfully!");
  };

  const renderStars = () => {
    const starComponents = [];
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        starComponents.push(
          <FaStar
            key={i}
            className="star"
            onClick={() => handleRatingChange(i)}
          />
        );
      } else {
        starComponents.push(
          <FaRegStar
            key={i}
            className="star"
            onClick={() => handleRatingChange(i)}
          />
        );
      }
    }

    return starComponents;
  };

  return (
    <>
      <div className="rates-container">
        <div className="cart">
          <h2 className="titre">Rate My Service</h2>
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
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default Rating;
