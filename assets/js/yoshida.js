function jumblr(targetNumber, divElement) {
  const displayElement = document.querySelector(divElement);
  if (!displayElement) { return };
  const targetStr = targetNumber.toString();
  const totalSteps = 5000 / 50;
  let currentStep = 0;
  const timer = setInterval(() => {
    currentStep++;
    let currentDisplay = Math.floor(100000 + Math.random() * 900000).toString();
    const progress = currentStep / totalSteps;
    const digitsToLock = Math.floor(progress * targetStr.length);
    if (digitsToLock > 0) {
      const lockedPart = targetStr.substring(0, digitsToLock);
      const randomPart = currentDisplay.substring(digitsToLock);
      currentDisplay = lockedPart + randomPart;
    }
    displayElement.innerText = currentDisplay;
    if (currentStep >= totalSteps) {
      clearInterval(timer);
      displayElement.innerText = targetStr;
    }
  }, 50);
}

function yoshidaSplash() {
  if (document.querySelector(".yoshidaIntro")) {
    document.title = "loading..";
    setTimeout(() => {
      document.querySelector(".yoshidaBracket > p").innerHTML = "[]";
      setTimeout(() => {
        document.querySelector(".yoshidaBracket > p").innerHTML = "[&emsp;]";
        setTimeout(() => {
          document.querySelector(".yoshidaBracket > p").innerHTML = "[&emsp;&emsp;]";
          setTimeout(() => {
            document.querySelector(".yoshidaBracket > p").innerHTML = "[&emsp;&emsp;&emsp;]";
            setTimeout(() => {
              document.querySelector(".yoshidaBracket > p").innerHTML = "[&emsp;&emsp;&emsp;&emsp;]";
              setTimeout(() => {
                jumblr(177013, ".yoshidaNum > p");
                document.querySelector(".yoshidaNum").style.transition = "3.75s";
                document.querySelector(".yoshidaNum").style.opacity = "1";
                setTimeout(() => {
                  document.querySelector(".yoshidaNum").style.color = "#c00";
                }, 2500);
                setTimeout(() => {
                  document.querySelector(".yoshidaNum").style.transition = "none";
                  setTimeout(() => {
                    document.title = "【Project:177013】";
                  }, 1250);
                  setTimeout(() => {
                    document.querySelector(".yoshidaIntro").style.transition = "2.5s";
                    document.querySelector(".yoshidaIntro").style.opacity = "0";
                    setTimeout(() => {
                      document.querySelector(".yoshidaIntro").remove();
                    }, 2500);
                  }, 1000);
                }, 5000);
              }, 0);
            }, 125);
          }, 125);
        }, 125);
      }, 125);
    }, 2500);
  } else { return console.warn("element div.yoshidaIntro doesn't exist. skipping."); }
}

function yoshidaInputCode() {
  document.addEventListener("keydown", (e) => {
    const target = "177013";
    if (!window.keysListen) {
      window.keysListen = {
        progress: 0,
        originalTitle: "【Project:177013】",
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
          document.body.insertAdjacentHTML("afterbegin", `
            <div class="yoshidaInterstitial" onclick="{ this.remove(); }">
              <div onclick="{ event.stopPropagation(); }">
                <h2>explore her saga of upheaval and misery..</h2>
                <br>
                <p>
                  step into the shoes of Yoshida Saki, a woman whose a story became well-known
                  due to its shocking nature and her eventual downfall. this will serve as the
                  initial point -- the Prelude -- to her eventual rebirth.
                </p>
                <br>
                <p>how would you like to read her story?</p>
                <div style="width: 100%; height: 0.5em;"></div>
                <div class="dlBtns">
                  <button onclick="{ yoshidaDL(this.textContent); }">PDF</button>
                  <button onclick="{ yoshidaDL(this.textContent); }">ZIP</button>
                </div>
              </div>
            </div>
          `);
        }, 0);
      }
    } else if (e.key.length === 1) {
      window.keysListen.progress = 0;
      document.title = window.keysListen.originalTitle;
    }
  });
}

function yoshidaDL(file) {
  dl = Object.assign(document.createElement("a"), {
    href: `/assets/177013/177013.${file.toLowerCase()}`,
    rel: "noopener noreferrer",
    download: `177013.${file.toLowerCase()}`,
  });
  dl.click();
  dl.remove();
  return document.querySelector(".yoshidaInterstitial").remove();
}