const getVideoId = function() {
  const idRegex = /\?v=([a-zA-Z]*)&/;
  const url = document.URL;
  return idRegex.exec(url)[1];
};

(function () {
  var videoId = getVideoId();
  console.log("Full Rip Ext Loaded with video id: " + videoId);

  var mp3path ='http://www.fullrip.net/mp3/' + encodeURIComponent(videoId);
  var videopath = 'http://www.fullrip.net/video/' + encodeURIComponent(videoId);
  var div_embed = document.getElementById('watch7-subscription-container');

   if (div_embed) {
    div_embed.innerHTML = div_embed.innerHTML + '&nbsp;&nbsp;<input type="button" onClick="javascript:window.open(\''+ mp3path +'\');" value="Get Mp3!"></button>&nbsp;<input type="button" onClick="javascript:(a = (b = document).createElement(\'script\')).src = \'http://fullrip.net/bookmark.js\', b.body.appendChild(a);void(0);" value="Get Video!"></button>';
  }
})();
