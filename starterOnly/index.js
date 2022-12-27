"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

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
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//fermer la modal avec la croix

const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", function () {
  console.log("Cross button clicked");
  document.querySelector(".bground").setAttribute("style", "display: none");
});
