import React from "react";

export default function VideoHeroe() {
  return (
    <section className="heroSection">
      <div className="videoPlaceHolder">
        <video src=""></video>
        <div className="overlay"></div>
      </div>
      <div className="heroContainer">
        <div className="rowAlignItemCenter">
          <div className="textButtonContainer">
            <h1 className="heroTitle">Powerful for developers. Fast for everyone.</h1>
            <a href="" className="heroBtnStart"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
