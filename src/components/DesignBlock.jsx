import React from "react";
import scaleAdoptionImg from "../assets/img/index_scale_adoption.webp";

export default function DesignBlock() {
  return (
    <div className="designBlockContainer">
      <div className="contentContainer">
        <h2>Scale</h2>
        <h3>for global adoption</h3>
        <h4>
          Integrate once and never worry about scaling again. Solana ensures
          composability between ecosystem projects by maintaining a single
          global state as the network scales. Never deal with fragmented Layer 2
          systems or sharded chains.
        </h4>
      </div>
      <img src={scaleAdoptionImg} alt="scale_Adoption_image" />
    </div>
  );
}
