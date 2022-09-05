import React from "react";

export default function Card({ cardData }) {
  console.log(cardData);
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <h2>{cardData[1]}</h2>
        <h3>{cardData[2]}</h3>
      </div>
      <img src={cardData[3]} alt="" />

    </div>
  );
}
