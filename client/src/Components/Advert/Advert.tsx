import React from "react";
import "./Advert.scss";
import home1 from '../../Assets/Images/home1.png';
import home2 from '../../Assets/Images/home2.png';

function Advert() {
  return (
    <div className="ad">
      <div className="container">
        <div className="ad__inner">
          <div className="ad__block">
            <h2 className="ad__title">E’LONLARINGIZNI BIZNI SAYTDA BERING</h2>
            <img src={home1} alt="Alt" className="ad__img" />
          </div>
          <div className="ad__block">
            <h2 className="ad__title">ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h2>
            <img src={home2} alt="Alt" className="ad__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert;
