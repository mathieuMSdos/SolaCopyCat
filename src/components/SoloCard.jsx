import React from "react";

export default function SoloCard() {
  return (
    <div className="soloCardGlobal">
      <div className="soloCardContainer">
        <div className="content">
          <h2>Developer Resources</h2>
          <div className="h3Btn">
            <h3>
              See the get started guide, videos, tutorials, SDKs, reference
              implementations, and more.
            </h3>
            <a className="btn" href="">
              start building
            </a>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
