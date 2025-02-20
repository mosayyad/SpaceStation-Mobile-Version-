document.addEventListener('DOMContentLoaded', () => {
  // Accessibility buttons
  const textSpeechBtn = document.getElementById('textSpeech');
  const textPauseBtn = document.getElementById('textPause');
  const textResumeBtn = document.getElementById('textResume');

  // Font size decrease/increase buttons
  const textDecrease = document.getElementById('textDecrease');
  const textIncrease = document.getElementById('textIncrease');

  // ----- Font Size Increase/Decrease Functionality -----
  // Use a numeric font size value (default 16px)
  let fontSizeValue = Number(localStorage.getItem('fontSizeValue')) || 16;
  
  const updateFontSize = () => {
    document.documentElement.style.fontSize = fontSizeValue + 'px';
    localStorage.setItem('fontSizeValue', fontSizeValue);
  };

  // Initialize font size on load
  updateFontSize();

  if (textDecrease) {
    textDecrease.addEventListener('click', () => {
      // Do not let font size go below 10px
      fontSizeValue = Math.max(10, fontSizeValue - 1);
      updateFontSize();
    });
  }

  if (textIncrease) {
    textIncrease.addEventListener('click', () => {
      // Do not let font size exceed 36px
      fontSizeValue = Math.min(36, fontSizeValue + 1);
      updateFontSize();
    });
  }

  // ----- Text-to-Speech Functionality -----
  let currentUtterance;
  let speechSynthesisInstance = window.speechSynthesis;
  if (textSpeechBtn) {
    textSpeechBtn.addEventListener('click', () => {
      const selection = window.getSelection();
      const selectedText = selection && selection.toString();
      const textToSpeak = selectedText ? selectedText : document.body.innerText;
      if (currentUtterance) {
        speechSynthesisInstance.cancel();
      }
      currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
      speechSynthesisInstance.speak(currentUtterance);
    });
  }

  if (textPauseBtn) {
    textPauseBtn.addEventListener('click', () => {
      speechSynthesisInstance.pause();
    });
  }

  if (textResumeBtn) {
    textResumeBtn.addEventListener('click', () => {
      speechSynthesisInstance.resume();
    });
  }
});
