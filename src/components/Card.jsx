import React from "react";

export default function Card({ cardData }) {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <h2>{cardData[0]}</h2>
        <h3>{cardData[1]}</h3>
      </div>
      <img src={cardData[2]} alt="" />
    </div>
  );
}
