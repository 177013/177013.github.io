function preStartAudio() {
  const title = "吉田咲🌹";
  return title;
}

function startAudio() {
  document.getElementById("playAud").play();
  document.title = preStartAudio();
  scanForInput();
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
  let res = await fetch(`https://api.ipinfo.io/lite/me?token=a7ecf4c37ce9f7`),
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

function scanForInput() {
  document.addEventListener("keydown", (e) => {
    const target = "177013";
    if (!window.keysListen) {
      window.keysListen = {
        progress: 0,
        originalTitle: preStartAudio(),
      };
    }
    const expectedChar = target[window.keysListen.progress];
    if (e.key.length === 1 && e.key.toLowerCase() === expectedChar) {
      window.keysListen.progress++;
      document.title = target.slice(0, window.keysListen.progress);
      if (window.keysListen.progress === target.length) {
        window.keysListen.progress = 0;
        document.title = window.keysListen.originalTitle;
        setTimeout(() => {
          dl = Object.assign(document.createElement("a"), {
            href: "/assets/zip/177013.zip",
            rel: "noopener noreferrer",
            download: "177013.zip",
          });
          dl.click();
          dl.remove();
        }, 0);
      }
    } else if (e.key.length === 1) {
      window.keysListen.progress = 0;
      document.title = window.keysListen.originalTitle;
    }
  });
}