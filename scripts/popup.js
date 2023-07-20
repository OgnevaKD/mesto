const profileEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const buttonCloseEditPopup = popupEdit.querySelector(".popup__close-button");

const formElement = document.querySelector(".popup__content");
const nameInput = formElement.querySelector(".popup__input_type_name");
const bioInput = formElement.querySelector(".popup__input_type_bio");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");

function togglePopup() {
  popupEdit.classList.toggle("popup__opened");
}

profileEdit.addEventListener("click", togglePopup);
buttonCloseEditPopup.addEventListener("click", togglePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);

function closePopup() {
  popupEdit.classList.remove("popup__opened");
}
