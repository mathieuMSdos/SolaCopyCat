import React from "react";

export default function ColoredCard({ coloredCardData }) {
  console.log(coloredCardData[3]);

  return (
    <div
      className="coloredCardDataContainer"
      style={{ backgroundColor: `${coloredCardData[3]}` }}
    >
      <div className="content">
        <h2>{coloredCardData[0]}</h2>
        <h3>{coloredCardData[1]}</h3>
      </div>
      <a className="btn" href="">
        {coloredCardData[2]}
      </a>
    </div>
  );
}
