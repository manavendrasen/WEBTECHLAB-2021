var errorMessages = [];

var title = $("#title");
var description = $("#description");
var acceptLicense = $("#accept");

$("#form").submit(function (e) {
  if (title.val() === "" || title.val() === null) {
    title.addClass("error");
    errorMessages.push("Name is required");
  }

  if (description.val() === "" || description.val() === null) {
    description.addClass("error");
    errorMessages.push("Description is required");
  }

  if (!acceptLicense.prop("checked")) {
    acceptLicense.next().addClass("error-accept");
    errorMessages.push("Please Accept the software license");
  }

  // we check if we have errors
  if (errorMessages.length > 0) {
    e.preventDefault(); // if we have errors, we don't want to submit the form
    $("#error-message").text(errorMessages.join(" | "));
    errorMessages = [];
  }
});

// removing the css border when user inputs anything

$(title).change(function () {
  title.removeClass("error");
});

$(description).change(function () {
  description.removeClass("error");
});

$(acceptLicense).change(function () {
  acceptLicense.next().removeClass("error-accept");
});

// reset buttons clears all errors and red styling

$("#reset-button").click(function () {
  errorMessages = [];
  title.removeClass("error");
  description.removeClass("error");
  acceptLicense.next().removeClass("error-accept");
  $("#error-message").text(null);
});
