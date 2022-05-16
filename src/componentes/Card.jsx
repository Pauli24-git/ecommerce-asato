import React from "react";

const Card = ({ cardImage }) => (
    <div className="card">
      <img className="imgCarousel" src={cardImage} alt="cardImage" />
    </div>
  );

export default Card;