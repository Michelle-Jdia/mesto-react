import React from "react";

function PopupWithForm() {
  return (
    <>
      {/*<!-- start popup --> */}
      <div className="popup popup_profile">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            onClick={closePopup}></button>
          <form
            action="#"
            method="post"
            className="popup__form popup__form"
            name="popup"
            novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <label className="popup__label" for="input-profile-name"></label>
            <input
              type="text"
              className="popup__input-text popup__input-text_type_name popup__input"
              value=""
              name="name"
              placeholder="Имя"
              required
              minlength="2"
              maxlength="40"
              id="input-profile-name"
            />
            <span
              className="popup__input-error"
              id="input-profile-name-error"></span>
            <label className="popup__label" for="input-about"></label>
            <input
              type="text"
              className="popup__input-text popup__input-text_type_job popup__input"
              value=""
              name="about"
              placeholder="О себе"
              required
              minlength="2"
              maxlength="200"
              id="input-about"
            />
            <span className="popup__input-error" id="input-about-error"></span>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <!-- end popup -->
        <!-- start popup-creat --> */}
      <div className="popup popup-creat">
        <div className="popup-creat__container">
          <button
            className="popup-creat__close popup__close"
            type="button"
            onClick={closePopup}></button>
          <form
            action="#"
            method="post"
            className="popup__form popup-creat__form"
            name="popup"
            novalidate>
            <h2 className="popup-creat__title">Новое место</h2>
            <label className="popup-creat__label" for="input-name"></label>
            <input
              type="text"
              className="popup-creat__input-text popup-creat__input-name popup__input"
              value=""
              name="name"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
              id="input-name"
            />
            <span className="popup__input-error" id="input-name-error"></span>
            <label className="popup-creat__label" for="input-link"></label>
            <input
              type="url"
              className="popup-creat__input-text popup-creat__input-link popup__input"
              value=""
              name="link"
              placeholder="Ссылка на картинку"
              required
              id="input-link"
            />
            <span className="popup__input-error" id="input-link-error"></span>
            <button className="popup-creat__button popup__button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      {/* <!-- end popup-creat -->
        <!-- start popup avatar --> */}
      <div className="popup popup-avatar">
        <div className="popup-avatar__container">
          <button
            className="popup-avatar__close popup__close"
            type="button"
            onClick={closePopup}></button>
          <form
            action="#"
            method="post"
            className="popup__form popup-avatar__form"
            name="popup"
            novalidate>
            <h2 className="popup-avatar__title">Обновить аватар</h2>
            <label className="popup-avatar__label" for="input-link"></label>
            <input
              type="url"
              className="popup-avatar__input-text popup-avatar__input-link popup__input"
              value=""
              name="link"
              placeholder="Ссылка на картинку"
              required
              id="avatar-input-link"
            />
            <span
              className="popup__input-error"
              id="avatar-input-link-error"></span>
            <button
              className="popup-avatar__button popup__button"
              type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* <!-- end popup avatar -->
        <!-- start popup ask delete --> */}
      <div className="popup popup-remove">
        <div className="popup-remove__container">
          <button
            className="popup-remove__close popup__close"
            type="button"></button>
          <form
            action="#"
            method="post"
            className="popup__form popup-remove__form"
            name="popup"
            novalidate>
            <h2 className="popup-remove__title">Вы уверены?</h2>
            <input
              className="popup-remove__button popup__button"
              type="submit"
              value="Да"
              name="submit"
            />
          </form>
        </div>
      </div>
      {/* <!-- end popup ask delete --> */}
    </>
  );
}
export default PopupWithForm;
