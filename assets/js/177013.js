function preStartAudio() {
  const title = "吉田咲🌹";
  document.title = "click anywhere to play audio.";
  return title;
}

function startAudio() {
  document.getElementById("playAud").play();
  document.title = preStartAudio();
}