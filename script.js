document.addEventListener("DOMContentLoaded", function() {
  const texts = ["Get Your Dream job ", "in a  ", "single click "]; // Add your texts here
  const delay = 500; // Delay between text changes (in milliseconds)

  const textLoopElement = document.getElementById('textLoop');
  let currentTextIndex = 0;

  function changeText() {
    textLoopElement.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }

  setInterval(changeText, delay);
});
