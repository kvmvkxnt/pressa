import React from "react";
import "./Advert.scss";

function Advert() {
  return (
    <div className="ad">
      <div className="container">
        <div className="ad__inner">
          <div className="ad__block">
            <h2 className="ad__title">E’LONLARINGIZNI BIZNI SAYTDA BERING</h2>
            <img src='/dist/Assets/Images/home1.png' alt="Alt" className="ad__img" />
          </div>
          <div className="ad__block">
            <h2 className="ad__title">ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h2>
            <img src='/dist/Assets/Images/home2.png' alt="Alt" className="ad__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert;
