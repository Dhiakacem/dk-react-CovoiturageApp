import React from "react";
import "./ImageText.css";
import logo from "./car.jpg";
import second from "./11.jpg";

const ImageText = () => {
  return (
    <div className="imageTextContainer">
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <img src={logo} alt="Image" className="imageTextImage" />
        </div>
        <div className="imageTextContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ipsum voluptates? Ut iure delectus, corporis molestias
            autem natus sunt iusto exercitationem voluptates a perferendis
          </p>
        </div>
      </div>
      <div className="imageTextGrid">
        <div className="imageTextImageContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ipsum voluptates? Ut iure delectus, corporis molestias
            autem natus sunt iusto exercitationem voluptates a perferendis
          </p>
        </div>
        <div className="imageTextContent">
          <img src={second} alt="Image" className="imageTextImage" />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
