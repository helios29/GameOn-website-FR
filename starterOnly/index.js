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
  const radioButtons = document.querySelectorAll('input[name="location"]');
  const checkBox1 = document.getElementById("checkbox1");

  console.log("checkbox : ", checkBox1.value);
  if (!checkBox1.checked) {
    setErrorFor(
      checkBox1,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  } else {
    setSuccessFor(checkBox1);
  }

  for (const radioButton of radioButtons) {
    let selectedSize;
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      setSuccessFor(radioButton);
      break;
    }
    setErrorFor(radioButton, "Vous devez choisir une option.");
  }

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
    setErrorFor(birthDate, "Vous devez entrer votre date de naissance.");
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
