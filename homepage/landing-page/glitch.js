// Get a reference to the glitch animation element
const glitchElement = document.querySelector('.glitch');

// Add an event listener for when the glitch animation starts
glitchElement.addEventListener('animationstart', () => {
  // Get a reference to the span that contains the English text
  const englishTextElement = document.querySelector('#changeText');

  // Get a reference to the span that contains the Japanese text
  const japaneseTextElement = document.querySelector('span:first-of-type');

  // Check if the current English text is "D"
  if (englishTextElement.textContent === 'D') {
    // If it is, update the English text to "E"
    englishTextElement.textContent = 'E';

    // Update the Japanese text to "ARCADE"
    japaneseTextElement.textContent = 'ARCADE';
  } else {
    // If it's not "D", update the English text to "D"
    englishTextElement.textContent = '';

    // Update the Japanese text to "アルカデエ"
    japaneseTextElement.textContent = 'アルカデ';
  }
});

var progressBar1 = document.getElementById("new");
progressBar1.addEventListener("click", function() {
  window.location.href = "mainpage/index.html";
});

const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const progressWidth = parseInt(getComputedStyle(progressBar).width, 10);
  if (progressWidth >= 550) {
    window.location.href = 'mainpage/index.html';
  }
}

setInterval(updateProgress, 100);
