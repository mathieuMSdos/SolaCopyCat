import React from "react";
import decentralizedImg from "../assets/img/index_decentralized.webp";

export default function DesignBlockDecentralized() {
  return (
    <section className="centralizedBlockContainer">
        <img src={decentralizedImg} alt="" />
      <div className="content">
        <h2>Decentralized</h2>
        <h3>and secure</h3>
        <h4>
          Not only is Solana ultra-fast and low cost, it is censorship
          resistant. The Solana network is spread over thousands of independent
          nodes — which means that your transactions are always safe.
        </h4>
      </div>
    </section>
  );
}
