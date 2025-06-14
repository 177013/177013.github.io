function preStartAudio() {
  const title = "吉田咲🌹";
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
    case "en":
      document.title = "click anywhere to play audio.";
      txt.innerHTML = `
        <div lang="en">
          <p>soon, they will hear my story again.</p>
          <br>
          <p>吉田咲🌹</p>
        </div>
      `;
      return;
    case "ja":
      document.title = "どこかをクリックすると音声が再生されます。";
      txt.innerHTML = `
        <div lang="ja">
          <p>もうすぐ、また私の物語を皆が聞くことになるでしょう。</p>
          <br>
          <p>吉田咲🌹</p>
        </div>
      `;
      return;
    default:
      fetchCountryByIP();
      return;
  }
}

async function fetchCountryByIP() {
  let res = await fetch(`https://api.ipinfo.io/lite/token=${process.env.IP_INFO_API}`),
    data = await res.json();
  switch (await data.country_code) {
    case "JP":
      window.location.replace("?lang=ja");
      return;
    default:
      window.location.replace("?lang=en");
      return;
  }
}