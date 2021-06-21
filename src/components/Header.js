import logo from '../images/Vector.svg';
export default Header;
function Header() {
	return (
		<header className="header page__header">
			<img src={logo} alt="Логотип сайта" className="header__logo" />
		</header>
	);
}
