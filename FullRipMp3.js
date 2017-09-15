const getVideoId = function() {
  const idRegex = /\?v=([a-zA-Z]*)&/;
  const url = document.URL;
  return idRegex.exec(url)[1];
};

(function () {
  const videoId = getVideoId();
  const infoSelector = '#info #container';

  const mp3Path ='http://www.fullrip.net/mp3/' + encodeURIComponent(videoId);
  const videoPath = 'http://www.fullrip.net/video/' + encodeURIComponent(videoId);

  const downloadText = document.createElement("span");
  downloadText.innerHTML = "Download:";

  const mp3Button = document.createElement("button");
  mp3Button.innerHTML = "MP3";
  mp3Button.onclick = () => window.open(mp3Path);

  const videoButton = document.createElement("button");
  videoButton.innerHTML = "Video";
  videoButton.onclick = () => window.open(videoPath);

  const maxSeconds = 10;
  let waitedSeconds = 0;

  // Info doesn't load immediately, so have to check over and over
  let intv = setInterval(() => {
    const infoContainer = document.querySelector(infoSelector);

    if (infoContainer) {
      infoContainer.appendChild(downloadText);
      infoContainer.appendChild(mp3Button);
      infoContainer.appendChild(videoButton);
      clearInterval(intv);
    } else {
      waitedSeconds++;

      if (waitedSeconds > maxSeconds) {
        console.error(`FullRip: HTML element with path '${infoSelector}' didn't load after ${maxSeconds} seconds.`);
        clearInterval(intv);
      }
    }
  }, 1000);
})();
