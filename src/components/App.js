import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null );

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null );
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      {/* main */}
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      {/* end main */}

      {/* footer */}
      <Footer />
      {/* end footer */}

      {/* popup profile */}
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        {/* <label className="popup__label" for="input-profile-name"></label> */}
        <input
          id="input-profile-name"
          type="text"
          className="popup__input popup__input-text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error"></span>
        {/* <label className="popup__label" for="input-about"></label> */}
        <input
          id="input-about"
          type="text"
          className="popup__input-text popup__input-text_type_job"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error"></span>
      </PopupWithForm>
      {/* end popup profile */}

      {/* start popup creat card */}

      <PopupWithForm
        title="Новое место"
        name="photo"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        {/* <label className="popup-creat__label" for="input-name"></label> */}
        <input
          type="text"
          className="popup-creat__input-text popup-creat__input-name"
          id="input-name"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error"></span>
        {/* <label className="popup-creat__label" for="input-link"></label> */}
        <input
          type="url"
          className="popup-creat__input-text popup-creat__input-link"
          id="input-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error"></span>
      </PopupWithForm>
      {/* end popup creat card */}

      {/* start popup edite avatar */}
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        {/* <label className="popup-avatar__label" for="input-link"></label> */}
        <input
          type="url"
          className="popup-avatar__input-text popup-avatar__input-link"
          id="avatar-input-link"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="form-avatar-input-error"></span>
      </PopupWithForm>
      {/* end popup edite avatar */}
      {/* start popup ask */}
      <PopupWithForm
        title="Вы уверены?"
        name="remove-card"
        buttonText="Да"
        onClose={closeAllPopups}></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
