var title = document.getElementById("title");
var description = document.getElementById("description");
var submitButton = document.getElementById("submit-button");
var resetButton = document.getElementById("reset-button");
var form = document.getElementById("form");
var error = document.getElementById("error-message");

// form submit handler
var errorMessages = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (title.value === "" || title.value === null) {
    errorMessages.push("Name is Required");
    title.classList.add("error");
  }

  if (description.value === "") {
    errorMessages.push("Description is Required");
    description.classList.add("error");
    console.log("description");
  }

  if (accept.checked === false) {
    errorMessages.push("Please Accept the Software License");
    accept.nextElementSibling.classList.add("error-accept");
  }

  // if we have errors
  if (errorMessages.length > 0) {
    e.preventDefault(); // we don't want refresh
    error.innerText = errorMessages.join("\n");
    errorMessages = [];
  }
});

// on change we want to remove red borders
title.addEventListener("change", () => {
  title.classList.remove("error");
});

description.addEventListener("change", () => {
  description.classList.remove("error");
});

accept.addEventListener("change", () => {
  accept.nextElementSibling.classList.remove("error-accept");
});

// resetting the form by removing the d
resetButton.addEventListener("click", () => {
  title.classList.remove("error");
  description.classList.remove("error");
  accept.nextElementSibling.classList.remove("error-accept");
  errorMessages = [];
  error.innerText = "";
  form.reset();
});
