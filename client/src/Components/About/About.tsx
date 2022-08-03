import React from "react";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.scss";

function About() {
  return (
    <>
      <Header />
      <main className="main" style={{ marginTop: 95 }}>
        <Divider subPages={['О нас']} mb={70} />

        <div className="about-us">
          <div className="container">
            <div className="about-us__inner">
              <h2 className="about-us__title">О нас</h2>

              <p className="about-us__text">
                Команда Salvation Education продолжит организовывать конкурсы в интересах своих учеников. В этот раз мы решили собрать в нашем центре представителей трех направлений: UX/UI дизайнеров, фронтенд и бэкенд разработчиков «за одним столом».
              </p>
              <p className="about-us__text">
                Команда Salvation Education продолжит организовывать конкурсы в интересах своих учеников. В этот раз мы решили собрать в нашем центре представителей трех направлений: UX/UI дизайнеров, фронтенд и бэкенд разработчиков «за одним столом».
              </p>
              <p className="about-us__text">
                На вчерашней встрече было сформировано 8 групп по четыре человека для подготовки трехэтапной веб-страницы, которая будет рекламировать любые онлайн и офлайн мероприятия в Ташкенте в течение двух недель, задача была поставлена.
              </p>
              <p className="about-us__text">
                Итак, ровно через 2 недели работы участников будут объективно оценены гостями из-за рубежа, а первые три места будут награждены ценными подарками. Желаем всем удачи.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About;
