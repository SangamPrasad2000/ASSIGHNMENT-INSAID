var popup = document.getElementById("popup");

function showPopup(event) {
  event.preventDefault(); // Prevent form submission
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
  setTimeout(function() {
    window.location.href = "index.html"; // Redirect to index.html after 5 seconds
  });
}
