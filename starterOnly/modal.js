function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("reserve");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((cross) => cross.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// function to validate "first" and "last" inputs, which are text inputs
function inputTextValidation(text) {
  if (text.length > 2) {
    return true;
  } else {
    return false;
  }
}

// function to validate inputs type email
function inputEmailValidation(email) {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}

// function to validate inputs type number
function inputNumberValidation(number) {
  if (isNaN(number) || number < 0 || number > 99 || !number) {
    return false;
  } else {
    return true;
  }
}

function validate() {
  let validated;
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let quantity = document.getElementById("quantity").value;

  if (
    inputTextValidation(first) &&
    inputTextValidation(last) &&
    inputEmailValidation(email) &&
    inputNumberValidation(quantity)
  ) {
    validated = true;
  } else {
    validated = false;
  }

  return validated;
}
