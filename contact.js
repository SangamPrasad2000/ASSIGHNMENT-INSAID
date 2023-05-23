var contactForm = document.getElementById("contact-form");
var popup = document.getElementById("popup");
var closePopupButton = document.getElementById("close-popup");


closePopupButton.addEventListener("click", function() {
  hidePopup();
  window.location.href = "index.html"; // Redirect to the home page
});

popup.addEventListener("click", function(event) {
  if (event.target === popup) {
    hidePopup();
    window.location.href = "index.html"; // Redirect to the home page
  }
});

function showPopup() {
  popup.classList.remove("hidden");
}

function hidePopup() {
  popup.classList.add("hidden");
}

function resetForm() {
  contactForm.reset();
}


