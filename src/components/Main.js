import React from "react";
import prof from "../images/image_profile.jpg";
import "../index.css";
function Main() {
  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector(".popup-avatar");
    popupAvatar.classList.add("popup__opened");
  }

  function handleEditProfileClick() {
    const popupProfile = document.querySelector(".popup_profile");
    popupProfile.classList.add("popup__opened");
  }
  function closePopup() {
    const popup = document.querySelector(".popup");
    popup.classList.remove("popup__opened");
    const popupAvatar = document.querySelector(".popup-avatar");
    popupAvatar.classList.remove("popup__opened");
    const popupCreat = document.querySelector(".popup-creat");
    popupCreat.classList.remove("popup__opened");
  }
  function handleAddPlaceClick() {
    const popupCreat = document.querySelector(".popup-creat");
    popupCreat.classList.add("popup__opened");
  }
  return (
    <>
      <main className="content">
        {/* <!-- start profile --> */}
        <section className="profile content__section">
          <div className="profile__avatar-container">
            <img
              src={prof}
              alt="аватар пользователя"
              className="profile__avatar"
            />
            <div
              className="profile__hover-edit"
              onClick={handleEditAvatarClick}></div>
          </div>
          <div className="profile__container-info">
            <div className="profile__avatar-info">
              <h1 className="profile__name">Michelle Jdia</h1>
              <button
                className="profile__button-edit"
                type="button"
                onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">YANDEX PRACTICUM</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            onClick={handleAddPlaceClick}></button>
        </section>
        {/* <!-- end profile -->

            <!-- start pictures --> */}
        <section className="pictures">
          <template className="template" id="template">
            <article className="cards">
              <img src="#" alt="#" className="cards__image" />
              <div className="cards__info">
                <h2 className="cards__title"></h2>
                <div className="cards__likes-container">
                  <button className="cards__heart" type="button"></button>
                  <span className="cards__likes"></span>
                </div>
                <button className="cards__bin" type="button"></button>
              </div>
            </article>
          </template>
        </section>
        {/* <!-- end pictures --> */}
      </main>
    </>
  );
}
export default Main;
