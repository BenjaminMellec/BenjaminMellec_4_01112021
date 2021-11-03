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
function inputTextValidation(input) {
  if (input.value.length > 2) {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  } else {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
}

// function to validate inputs type email
function inputEmailValidation(input) {
  // regular expression given by w3c to test input mail value (https://www.w3.org/TR/2012/WD-html-markup-20120329/input.email.html)
  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regExp.test(input);
}

// function to validate inputs type number
function inputNumberValidation(input) {
  if (isNaN(input) || input < 0 || input > 99 || !input) {
    return false;
  } else {
    return true;
  }
}

// function to validate inputs type radio
function inputRadioValidation(input) {
  let radioChecked = false;
  for (radio of input) {
    if (radio.checked) {
      radioChecked = true;
      break;
    }
  }
  return radioChecked;
}

// final function using all others to validate the form fields
function validate() {
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const locations = document.querySelectorAll('[name="location"]');
  const conditions = document.getElementById("checkbox1").checked;

  if (
    inputTextValidation(first) &&
    inputTextValidation(last) &&
    inputEmailValidation(email) &&
    inputNumberValidation(quantity) &&
    inputRadioValidation(locations) &&
    conditions
  ) {
    return true;
  } else {
    return false;
  }
}
