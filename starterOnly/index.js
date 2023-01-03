"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

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

  if (firstNameValue === "") {
    setErrorFor(firstName, "le prénom ne peut pas rester vide");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "le nom ne peut pas rester vide");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "l'email ne peut pas rester vide");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email invalide");
  } else {
    setSuccessFor(email);
  }

  if (birthDateValue === "") {
    setErrorFor(birthDate, "la date de naissance ne peut pas rester vide");
    // } else if (!isBirthDate(birthDateValue)) {
    //   setErrorFor(birthDate, "date de naissance invalide");
  } else {
    setSuccessFor(birthDate);
  }

  if (quantityValue === "") {
    setErrorFor(quantity, "ce champ ne peut pas rester vide");
  } else {
    setSuccessFor(quantity);
  }
}

//radio button
const btn = document.querySelector(".btn-submit");
const radioButtons = document.querySelectorAll(".checkbox-label");
// const radioButtons = document.querySelectorAll('input[name="location"]');
btn.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  // show the output:
  console.log(selectedSize);
  if (selectedSize == undefined) {
    console.log(`You haven't selected any city`);
    setErrorForRadio(radioButtons, "ce champ ne peut pas rester vide");
  } else {
    console.log(`You selected ${selectedSize}`);
    setSuccessFor(radioButtons);
  }
});

function setErrorForRadio(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  console.log(`Valeur de Formcontrol Radio : ${formControl}`);
  small.innerText = message;
}

//ERROR SUCCESS
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

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
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
  console.log("Cross button clicked");
  document.querySelector(".bground").setAttribute("style", "display: none");
});
