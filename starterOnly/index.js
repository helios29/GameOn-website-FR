"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMessage = document.getElementById("confirmationMessage");

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
  const radioButtons = document.querySelectorAll('input[name="location"]');
  const checkBox1 = document.getElementById("checkbox1");

  var error = false; //pas d'erreur

  if (!checkBox1.checked) {
    setErrorFor(
      checkBox1,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    error = true;
  } else {
    setSuccessFor(checkBox1);
  }

  for (const radioButton of radioButtons) {
    let selectedSize;
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      setSuccessFor(radioButton);
      console.log(error);
      error = false;
      break;
    }
    setErrorFor(radioButton, "Vous devez choisir une option.");
    error = true;
  }
  console.log(error);

  if (firstNameValue === "") {
    setErrorFor(firstName, "le prénom ne peut pas rester vide");
    error = true;
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "le nom ne peut pas rester vide");
    error = true;
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "l'email ne peut pas rester vide");
    error = true;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email invalide");
    error = true;
  } else {
    setSuccessFor(email);
  }

  if (birthDateValue === "") {
    setErrorFor(birthDate, "Vous devez entrer votre date de naissance.");
    error = true;
  } else {
    setSuccessFor(birthDate);
  }

  if (quantityValue === "") {
    setErrorFor(quantity, "ce champ ne peut pas rester vide");
    error = true;
  } else {
    setSuccessFor(quantity);
  }
  return error;
}

//ERROR SUCCESS INITIALIZE
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "formData error";
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

function isBirthDate(birthDate) {
  return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
    birthDate
  );
}

//fermer la modal avec la croix
const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", function () {
  document.querySelector(".bground").setAttribute("style", "display: none");
});

//Valider le formulaire
form.addEventListener("submit", function (event) {
  let result = checkInputs();

  if (!result) {
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
  document.querySelector(".bground").setAttribute("style", "display: none");
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
});
