function playSound(e) {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelector(`.key[data-key=${e.code}]`);
  if (!audio) return; // stop function from running
  audio.currentTime = 0; // rewind sound to start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
