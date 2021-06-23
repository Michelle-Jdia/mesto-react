import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default App;
function App() {
	const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
	const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
	const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
	const [ selectedCard, setSelectedCard ] = React.useState({});
	const [ currentUser, setCurrentUser ] = React.useState({});
	const [ cards, setCards ] = React.useState([]);
	const [ isImagePopupOpen, setImagePopupOpen ] = React.useState(false);

	React.useEffect(() => {
		api
			.getInitialCards()
			.then((cardList) => {
				setCards(cardList);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		api
			.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				setCards((cards) => cards.map((currentCard) => (currentCard._id === card._id ? newCard : currentCard)));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleCardDelete(card) {
		api
			.removeCard(card._id)
			.then(() => {
				const newCards = cards.filter((elem) => elem !== card);
				setCards(newCards);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	React.useEffect(() => {
		api
			.getUserInfo()
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
		setSelectedCard(null);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
		setImagePopupOpen(true);
	}

	function handleUpdateUser({ name, about }) {
		api
			.editUserInfo(name, about)
			.then((data) => {
				setCurrentUser(data);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleUpdateAvatar({ avatar }) {
		api
			.editUserAvatar(avatar)
			.then((data) => {
				setCurrentUser(data);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function handleAddPlaceSubmit({ name, link }) {
		api
			.addCard(name, link)
			.then((data) => {
				setCards([ data, ...cards ]);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<Header />
				{/* main */}
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					onCardLike={handleCardLike}
					cards={cards}
					onCardDelete={handleCardDelete}
				/>
				{/* end main */}

				{/* footer */}
				<Footer />
				{/* end footer */}

				{/* popup profile */}

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				{/* end popup profile */}

				{/* start popup creat card */}

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				{/* end popup creat card */}

				{/* start popup edit avatar */}

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>

				{/* end popup edit avatar */}

				{/* start popup ask */}
				<PopupWithForm title="Are you sure?" name="remove-card" buttonText="Yes" onClose={closeAllPopups} />
				{/* end popup ask */}

				{/* start popup img */}

				<ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />

				{/* end popup img */}
			</div>
		</CurrentUserContext.Provider>
	);
}
