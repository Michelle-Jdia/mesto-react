import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup__opened"
      }`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}></button>

        <form
          className={`popup__form form_type_${props.name}`}
          name="popup"
          noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
