import React from "react";
import "./Proprity.css";
import logo from "./bla.png";


const Proprity = () => {
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
    </div>
  );
};

export default Proprity;
