function playSound(e) {
  const audio = document.querySelector(`audio[data-code = "${e.code}"]`);
  const keyElement = document.querySelector(`.key[data-code = "${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((el) => el.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
