import React from "react";
import SolanaHeroVid from "../assets/video/solanaHeroVid.mp4";

export default function Test() {
  return (
    <section className="videoHeroContainer">
      <div className="overlayTop"></div>
      <div className="overlayBottom"></div>

      <div className="container">
        <div className="videoPlaceHolder">
          <video src={SolanaHeroVid} autoPlay loop muted></video>
        </div>
      </div>
      <div className="textAndBtnContainer">
        <h1>Powerful for developers. Fast for everyone.</h1>
        <div className="btnContainer">
          <a href="">start building</a>
          <a href="">read documentation</a>
        </div>
        <h2>
          Solana is a decentralized blockchain built to enable scalable,
          user-friendly apps for the world.
        </h2>
      </div>
    </section>
  );
}
