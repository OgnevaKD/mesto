const profileEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup");
const buttonCloseEditPopup = popupEdit.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__input_type_name");
const bioInput = formElement.querySelector(".popup__input_type_bio");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");

function addPopup() {
  popupEdit.classList.add("popup_opened");

  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
}

function closePopup() {
  popupEdit.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  closePopup();
}

function closePopup() {
  popupEdit.classList.remove("popup_opened");
}

profileEdit.addEventListener("click", addPopup);
buttonCloseEditPopup.addEventListener("click", closePopup);

formElement.addEventListener("submit", handleFormSubmit);
