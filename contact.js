let form = document.querySelector("#contact-form");
let formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.innerHTML = "Thank you! Your message has been submitted.";

    form.reset();

});