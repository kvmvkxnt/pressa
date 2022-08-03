import React from "react";
import Icons from "../Lib/Icons";
import "./Card.scss";

function Card() {
  return (
    <li className="card">
      <a href="#" className="card__link">
        <img src='/dist/Assets/Images/card1.png' alt="Alt" className="card__img" />

        <div className="card__info">
          <h3 className="card__title">Alisher Isaevdan biznes va IT bo’yicha master klass</h3>

          <div className="card__desc">
            <ul className="card__list">
              <li className="card__item">
                <Icons name="user" />
                <p className="card__p">Alisher Isayev</p>
              </li>
              <li className="card__item">
                <Icons name="calendar" />
                <p className="card__p">17 / 01 / 2022</p>
              </li>
              <li className="card__item">
                <Icons name="status-online" />
                <p className="card__p">Online</p>
              </li>
            </ul>
            <ul className="card__list">
              <li className="card__item">
                <Icons name="presentation-chart-line" />
                <p className="card__p">График дизайнер</p>
              </li>
              <li className="card__item">
                <Icons name="clock" />
                <p className="card__p">15:00</p>
              </li>
              <li className="card__item">
                <Icons name="eye" />
                <p className="card__p">2550</p>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Card;
