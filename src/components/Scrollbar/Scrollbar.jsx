import React, { useState } from "react";
import "./Scrollbar.css";

const Scrollbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    if (scrollTop > windowHeight / 2) {
      /* Adjust the value to control when the button appears */
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`scrollbar ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Scroll To Top"
    >
      &uarr;
    </button>
  );
};

export default Scrollbar;
