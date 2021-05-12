import logo from "../images/Vector.svg";

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
    </header>
  );
}

export default Header;
