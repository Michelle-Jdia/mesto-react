import React from "react";
import logo from "../images/Vector.svg";

function Header() {
  return (
    <>
      {/* <!-- start header --> */}
      <header className="header page__header">
        <img src={logo} alt="логотип" className="header__logo" />
      </header>
      {/* <!-- end header --> */}
    </>
  );
}
export default Header;
