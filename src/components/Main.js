import api from "../utils/Api";
import React from "react";
import Card from "./Card";
import "../index.css";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const { onEditAvatar, onAddPlace, onEditProfile, onCardClick } = props;

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api
      .getInitialCards()
      .then((cardList) => {
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile content__section">
        <div className="profile__avatar-container">
          <img
            src={`${userAvatar}`}
            alt="Фото Аватара"
            className="profile__avatar"
          />
          <div className="profile__hover-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__container-info">
          <div className="profile__avatar-info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}></button>
      </section>
      <section className="pictures">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
