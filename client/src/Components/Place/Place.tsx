import React from "react";
import { useSelector } from "react-redux";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Place.scss";

function Place() {
  const { user } = useSelector((state: any) => state.user);
  console.log(user);

  async function handleSubmit(evt: any) {
    const target = evt.target;
    const poll = target.parentNode.parentNode.parentNode;
    console.log(poll);
  };

  return (
    <>
      <Header />
      <main>
        <Divider subPages={['Подача объявления']} mb={50} />

        <div className="place">
          <div className="container--sm">
            <div className="place__inner">
              <h2 className="place__header">
                Подать объявление
              </h2>

              <div className="place__section">
                <h3 className="place__title">Выберите время и направление</h3>
                <div className="place__datetime">
                  <p className="place__label">Выберите дату проведения</p>
                  <div className="place__datetime__inputs">
                    <input type="date" id="dateInput" />
                    <input type="time" id="timeInput" />
                  </div>
                </div>
                <div className="place__category">
                  <div className="place__category__block">
                    <p className="place__label">Выберите направление</p>
                    <select className="place__select" id="catInput">
                      <option value="it">Информационные технологии</option>
                    </select>
                  </div>
                  <div className="place__category__block">
                    <p className="place__label">Внутреннее направление</p>
                    <select className="place__select" id="subcatInput">
                      <option value="java">Java Developer</option>
                    </select>
                  </div>
                </div>
                <div className="place__type">
                  <div className="place__type__block">
                    <p className="place__label">Тип мероприятия</p>
                    <label className="place__switch">
                      <input type="checkbox" className="place__checkbox visually-hidden" id="typeInput" />
                      <span className="place__slider">
                        <p className="place__slider__text">Online</p>
                        <p className="place__slider__text">Offline</p>
                      </span>
                    </label>
                  </div>
                  <div className="place__type__block">
                    <p className="place__label">Вставьте ссылку</p>
                    <input type="text" className="place__input" placeholder="Some nifo" id="linkInput" />
                  </div>
                </div>
              </div>
              <h3 className="place__title">Организатор</h3>
              <div className="place__radios">
                <div className="place__radios__label">
                  <p className="place__radios__p">Физическое лицо</p>
                  <input type="radio" className="place__radios__radio" value="physical" />
                </div>
                <div className="place__radios__label">
                  <p className="place__radios__p">Юридическое лицо</p>
                  <input type="radio" className="place__radios__radio" value="legal" />
                </div>
              </div>
              <div className="place__section">
                <ul className="place__list">
                  <li className="place__item">
                    <p className="place__label">Юридическое имя</p>
                    <input type="text" className="place__input" id="legalNameInput" />
                  </li>
                  <li className="place__item">
                    <p className="place__label">Имя фамилия</p>
                    <input type="text" className="place__input" id="nameInput" />
                  </li>
                  <li className="place__item">
                    <p className="place__label">Профессия</p>
                    <input type="text" className="place__input" id="professionInput" />
                  </li>
                  <li className="place__item">
                    <p className="place__label">Номер телефона</p>
                    <input type="text" className="place__input" id="phoneInput" />
                  </li>
                  <li className="place__item">
                    <p className="place__label">Доп. номер телефона</p>
                    <input type="text" className="place__input" id="addPhoneInput" />
                  </li>
                </ul>
              </div>
              <div className="place__section">
                <h3 className="place__title">Post</h3>
                <input type="text" className="place__input__post" placeholder="POST TITLE" id="titleInput" />

                <div className="place__post__block">
                  <div className="place__label">Description</div>
                  <input type="text" className="place__input" placeholder="Description" id="descInput" />
                </div>

                <p className="place__label">Upload image</p>
                <input type="file" className="place__file__button" id="fileInput" />
                <p className="place__warning">Upload image must be less than 2MB</p>

                <p className="place__label">Post text</p>
                <textarea cols={30} rows={10} className="place__input" placeholder="Post text" id="textInput"></textarea>

                <div className="place__buttons">
                  <button className="place__reset" disabled>Reset</button>
                  <button className="place__submit" onClick={handleSubmit} >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default Place;
