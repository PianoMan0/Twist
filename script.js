const audio = document.getElementById('themeMusic');
const button = document.getElementById('audioButton');

button.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    button.textContent = 'Pause';
  } else {
    audio.pause();
    button.textContent = 'Play music!';
  }
});

audio.onerror = function() {
  console.error("Audio file failed to load.");
  button.disabled = true;
  button.textContent = "Audio error";
};
