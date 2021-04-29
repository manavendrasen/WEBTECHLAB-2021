var errorMessages = [];

var title = $("#title");
var description = $("#description");
var acceptLicense = $("#accept");

$("#form").submit(function (e) {
  e.preventDefault();

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
    errorMessages.push("select is required");
  }

  $("#error-message").text(errorMessages.join("\t"));
});

$(title).change(function () {
  title.removeClass("error");
});

$(description).change(function () {
  description.removeClass("error");
});

$(acceptLicense).change(function () {
  acceptLicense.next().removeClass("error-accept");
});

$("#reset-button").click(function () {
  errorMessages = [];
  title.removeClass("error");
  description.removeClass("error");
  acceptLicense.next().removeClass("error-accept");
  $("#error-message").text("");
});
