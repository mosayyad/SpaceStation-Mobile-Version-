// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Accessibility Controls (similar to your existing JS)
let baseFontSize = parseFloat(getComputedStyle(document.body).fontSize);


const textIncrease = document.getElementById("textIncrease");
textIncrease.addEventListener("click", () => {
  baseFontSize += 2;
  document.body.style.fontSize = baseFontSize + "px";
});

const textDecrease = document.getElementById("textDecrease");
textDecrease.addEventListener("click", () => {
  baseFontSize = Math.max(12, baseFontSize - 2);
  document.body.style.fontSize = baseFontSize + "px";
});

const textSpeech = document.getElementById("textSpeech");
const textPause = document.getElementById("textPause");
const textResume = document.getElementById("textResume");

if ("speechSynthesis" in window) {
  textSpeech.addEventListener("click", () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    const selectedText = window.getSelection().toString().trim();
    let textToSpeak = selectedText || document.getElementById("main").innerText;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
  });

  textPause.addEventListener("click", () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    }
  });

  textResume.addEventListener("click", () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  });
} else {
  textSpeech.disabled = true;
  textPause.disabled = true;
  textResume.disabled = true;
  console.warn("Text-to-speech not supported in this browser.");
}
