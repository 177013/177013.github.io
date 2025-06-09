function preStartAudio() {
  const title = "吉田咲🌹";
  document.title = "click anywhere to play audio.";
  return title;
}

function startAudio() {
  document.getElementById("playAud").play();
  document.title = preStartAudio();
}

function langQue() {
  let lang = new URLSearchParams(window.location.search).get("lang"),
    txt = document.getElementById("centerText");
  switch (lang) {
    case "ja":
      txt.innerHTML = `
        <div lang="ja">
          <p>もうすぐ、また私の物語を皆が聞くことになるでしょう。</p>
          <br>
          <p>吉田咲🌹</p>
        </div>
      `;
      return;
    case "en":
    default:
      return;
  }
}