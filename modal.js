// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const form = document.getElementById("reserve");
const modalSuccess = document.getElementById("success");
const closeSuccessElements = document.querySelectorAll(".close-success");
const buttonSubmit = document.querySelector(".btn-submit");

let editNav = () => {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
};

// launch modal form
let launchModal = () => {
  modalbg.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
};

// close modal form
let closeModal = () => {
  modalbg.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
};

// function to validate "first" and "last" inputs, which are text inputs
let inputTextValidation = (input) => {
  if (input.value.length > 2) {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  } else {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
};

// function to validate inputs type email
let inputEmailValidation = (input) => {
  // regular expression given by w3c to test input mail value (https://www.w3.org/TR/2012/WD-html-markup-20120329/input.email.html)
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value !== "" && regexEmail.test(input.value)) {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  } else {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
};

// function to validate inputs type date
let inputDateValidation = (input) => {
  const regexDate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

  // valueify today's date & input's date to compare them
  const today = new Date().getTime();
  const inputValueified = new Date(input.value).getTime();

  if (
    input.value !== "" &&
    regexDate.test(input.value) &&
    inputValueified < today
  ) {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  } else {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
};

// function to validate inputs type number
let inputNumberValidation = (input) => {
  if (
    isNaN(input.value) ||
    input.value < 0 ||
    input.value > 99 ||
    !input.value
  ) {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  } else {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
};

// function to validate inputs type radio
let inputRadioValidation = (inputs) => {
  let radioChecked = false;
  for (radio of inputs) {
    radio.parentElement.setAttribute("data-error-visible", true);
    if (radio.checked) {
      radio.parentElement.setAttribute("data-error-visible", false);
      radioChecked = true;
      break;
    }
  }
  return radioChecked;
};

// function to validate inputs type checkbox
let inputCheckboxValidation = (input) => {
  if (input.checked) {
    input.parentElement.setAttribute("data-error-visible", false);
    return true;
  } else {
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
};

// cancel the reload of the page when submitting the form and submit the form when the thank you message closes
let thanks = () => {
  form.style.display = "none";
  modalSuccess.style.display = "block";
  modalClose.classList.remove("close");
  modalClose.classList.add("close-success");

  for (closeSuccess of closeSuccessElements) {
    closeSuccess.addEventListener("click", function (e) {
      form.submit();
    });
  }
};

// main function using all the others to validate the form fields
let validate = () => {
  // form inputs
  const inputs = document.getElementsByTagName("input");
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locations = document.querySelectorAll('[name="location"]');
  const conditions = document.getElementById("checkbox1");

  // calls of the functions to test inputs
  let validationFirst = inputTextValidation(first);
  let validationLast = inputTextValidation(last);
  let validationEmail = inputEmailValidation(email);
  let validationBirthdate = inputDateValidation(birthdate);
  let validationQuantity = inputNumberValidation(quantity);
  let validationLocations = inputRadioValidation(locations);
  let validationConditions = inputCheckboxValidation(conditions);

  if (
    validationFirst &&
    validationLast &&
    validationEmail &&
    validationBirthdate &&
    validationQuantity &&
    validationLocations &&
    validationConditions
  ) {
    return true;
  } else {
    return false;
  }
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// cancel the default sumbission event to display a thank you message
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let validated = validate();

  if (validated) {
    thanks();
  }
});
