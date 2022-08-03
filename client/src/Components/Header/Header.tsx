import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icons from "../Lib/Icons";
import Logo from "../Lib/Logo";
import './Header.scss';

function Header() {

  const { token } = useSelector((state: any) => state.token);
  console.log(token);
  function handleSubmit(evt: any) {
    evt.preventDefault();
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo fs={36} lh={43} cl="white" />

          <div className="header__elements">
            <form className="header__form" onSubmit={handleSubmit}>
              <button className="header__submit" type="submit">
                <Icons name="search" />
              </button>
              <input type="text" className="header__input" placeholder="Искать" />
            </form>

            <nav className="header__nav">
              <ul className="nav__list">
                <li className="nav__item"><Link to="/about" className="nav__link">О нас</Link></li>
                <li className="nav__item"><Link to="/" className="nav__link">Вопросы и ответы</Link></li>
                <li className="nav__item"><Link to={token.length ? "/place" : "/login"} className="nav__link">+ Подать объявление</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
