import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
export default EditProfilePopup;

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const currentUser = React.useContext(CurrentUserContext);

	const [ name, setName ] = React.useState('');
	const [ description, setDescription ] = React.useState('');

	function handleChangeName(evt) {
		setName(evt.target.value);
	}

	function handleChangeDescription(evt) {
		setDescription(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onUpdateUser({
			name: name,
			about: description
		});
	}

	React.useEffect(
		() => {
			setName(currentUser.name);
			setDescription(currentUser.about);
		},
		[ currentUser, isOpen ]
	);

	return (
		<PopupWithForm
			title="Edit Profile"
			name="profile"
			buttonText="Save"
			isOpen={isOpen}
			onClose={onClose}
			handleSubmit={handleSubmit}>
			<input
				id="input-profile-name"
				type="text"
				className="popup__input popup__input-text"
				name="name"
				value={name || ''}
				placeholder="Name"
				required
				minLength="2"
				maxLength="40"
				onChange={handleChangeName}
			/>
			<span className="popup__input-error" />
			<input
				id="nput-about"
				type="text"
				className="popup__input-text popup__input-text_type_job"
				name="about"
				value={description || ''}
				placeholder="About me"
				required
				minLength="2"
				maxLength="200"
				onChange={handleChangeDescription}
			/>
			<span className="popup__input-error" />
		</PopupWithForm>
	);
}
