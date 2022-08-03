import React from "react";
import Icons from "../Lib/Icons";
import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero__heading">
            Eng so’ngi master klasslar va tadbirlar bizning saytda
          </h1>

          <ul className="hero__list">
            <li className="hero__item">
              <button className="hero__button">
                <Icons name="calendar" />
                <p className="hero__info" id="hero-date">22 / 02 / 2022</p>
                <Icons name="chevron" />
              </button>
            </li>
            <li className="hero__item">
              <button className="hero__button">
                <Icons name="view-grid" />
                <p className="hero__info" id="hero-date">Выберите категорию</p>
                <Icons name="chevron" />
              </button>
            </li>
            <li className="hero__item">
              <button className="hero__button">
                <Icons name="status-online" />
                <p className="hero__info" id="hero-date">Онлайн / Офлайн</p>
                <Icons name="chevron" />
              </button>
            </li>
            <li className="hero__item">
              <button className="hero__button">
                <Icons name="user-circle" />
                <p className="hero__info" id="hero-date">Имя фамилия</p>
                <Icons name="chevron" />
              </button>
            </li>
            <li className="hero__item">
              <button className="hero__button">
                Искать
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Hero;
