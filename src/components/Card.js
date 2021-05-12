import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="template">
      <article className="cards">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="cards__image"
          onClick={handleClick}
        />
        <div className="cards__info">
          <h2 className="cards__title">{props.card.name}</h2>
          <div className="cards__likes-container">
            <button className="cards__heart" type="button"></button>
            <span className="cards__likes">{props.card.likes.length}</span>
          </div>
          <button className="cards__bin" type="button"></button>
        </div>
      </article>
    </div>
  );
}

export default Card;
