"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioButtons = document.querySelectorAll('input[name="location"]');
let radioButton;
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMessage = document.getElementById("confirmationMessage");

let firstNameError = "";
let lastNameError = "";
let emailError = "";
let birthDateError = "";
let quantityError = "";
let radioButtonError = "";
let checkBox1Error = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthDateValue = birthDate.value.trim();
  const quantityValue = quantity.value.trim();
  const checkBox1 = document.getElementById("checkbox1");

  // var error = false; //pas d'erreur

  if (firstNameValue === "") {
    setErrorFor(firstName, "le prénom ne peut pas rester vide");
    firstNameError = true;
  } else {
    setSuccessFor(firstName);
    firstNameError = false;
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "le nom ne peut pas rester vide");
    lastNameError = true;
  } else {
    setSuccessFor(lastName);
    lastNameError = false;
  }

  if (emailValue === "") {
    setErrorFor(email, "l'email ne peut pas rester vide");
    emailError = true;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email invalide");
    emailError = true;
  } else {
    setSuccessFor(email);
    emailError = false;
  }

  if (birthDateValue === "") {
    setErrorFor(birthDate, "Vous devez entrer votre date de naissance.");
    birthDateError = true;
  } else {
    setSuccessFor(birthDate);
    birthDateError = false;
  }

  if (quantityValue === "") {
    setErrorFor(quantity, "ce champ ne peut pas rester vide");
    quantityError = true;
  } else {
    setSuccessFor(quantity);
    quantityError = false;
  }

  for (radioButton of radioButtons) {
    if (radioButton.checked) {
      setSuccessFor(radioButton);
      radioButtonError = false;
      break;
    }
    setErrorFor(radioButton, "Vous devez choisir une option.");
    radioButtonError = true;
  }

  if (!checkBox1.checked) {
    setErrorFor(
      checkBox1,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    checkBox1Error = true;
  } else {
    setSuccessFor(checkBox1);
    checkBox1Error = false;
  }
}

//ERROR SUCCESS INITIALIZE
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formData error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "formData success";
}

function initialize(input) {
  const formControl = input.parentElement;
  formControl.className = "formData";
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}

//fermer la modal avec la croix
const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", function () {
  document.querySelector(".bground").setAttribute("style", "display: none");
});

//Valider le formulaire
form.addEventListener("submit", function (event) {
  if (
    !firstNameError &&
    !lastNameError &&
    !emailError &&
    !birthDateError &&
    !quantityError &&
    !radioButtonError &&
    !checkBox1Error
  ) {
    //result === false
    document
      .querySelector("#confirmationMessage")
      .setAttribute("style", "display: block");
    document
      .querySelector("#closeBtnRed")
      .setAttribute("style", "display: block");
    document
      .querySelector(".modal-body")
      .setAttribute("style", "display: none");
  }
});

//fermer la modal de validation avec le bouton
closeBtnRed.addEventListener("click", function () {
  document
    .querySelector("#confirmationMessage")
    .setAttribute("style", "display: none");
  document.querySelector("#closeBtnRed").setAttribute("style", "display: none");
  document.querySelector(".modal-body").setAttribute("style", "display: block");

  firstName.value = "";
  initialize(firstName);
  lastName.value = "";
  initialize(lastName);
  email.value = "";
  initialize(email);
  birthDate.value = "";
  initialize(birthDate);
  quantity.value = "";
  initialize(quantity);
  radioButton.checked = false;
});
