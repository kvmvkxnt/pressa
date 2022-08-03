import React from "react";
import Card from "../Card/Card";
import './Events.scss';

function Events() {
  const [state] = React.useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="events">
      <div className="container">
        <div className="events__inner">
          <h2 className="events__heading">Последние объявления</h2>

          <ul className="events__list">
            {state.map(_ => <Card key={_} />)}
          </ul>

          <button className="events__button">Смотреть больше</button>
        </div>
      </div>
    </div>
  )
};

export default Events;
