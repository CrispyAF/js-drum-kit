window.addEventListener("keydown", function (e) {
  // e.preventDefault;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll(".key");

  if (!audio) return; // stops the function
  //console.log(audio);
  //console.log(key);
  audio.currentTime = 0; //rewind to start
  audio.play();

  key.classList.add("playing"); //adding the animation class

  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip transform
    this.classList.remove("playing");
  }
});
