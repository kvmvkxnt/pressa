import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Lib/Icons";
import Logo from "../Lib/Logo";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <Logo fs={30} lh={36} cl="white" />

          <ul className="footer__list">
            <li className="footer__item"><Link to="/about" className="footer__link">О нас</Link></li>
            <li className="footer__item"><Link to="/faq" className="footer__link">Вопросы и ответы</Link></li>
          </ul>

          <div className="footer__contacts">
            <a href="tel:998712001102" className="footer__phone">
              <Icons name="call" />
              <p className="footer__tel">+71 200-11-02</p>
            </a>

            <ul className="footer__social-media">
              <li className="footer__social-media__item"><a href="#" className="footer__social-media__link"><Icons name="facebook" /></a></li>
              <li className="footer__social-media__item"><a href="#" className="footer__social-media__link"><Icons name="instagram" /></a></li>
              <li className="footer__social-media__item"><a href="#" className="footer__social-media__link"><Icons name="telegram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
