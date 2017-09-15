var getList = function(url, gkey){
        var returned = null;
        if (url.indexOf("?") != -1){
          var list = url.split("?")[1].split("&"),
                  gets = [];
          for (var ind in list){
            var kv = list[ind].split("=");
            if (kv.length>0)
                gets[kv[0]] = kv[1];
        }
        returned = gets;
        if (typeof gkey != "undefined")
            if (typeof gets[gkey] != "undefined")
                returned = gets[gkey];
        }
        return returned;
};
(function () {
	var videoid = getList(document.URL, "v");
	var mp3path ='http://www.fullrip.net/mp3/'+encodeURIComponent(videoid);
	var videopath = 'http://www.fullrip.net/video/'+encodeURIComponent(videoid);
	var div_embed = document.getElementById('watch7-subscription-container');
   if (div_embed) {
    	div_embed.innerHTML = div_embed.innerHTML + '&nbsp;&nbsp;<input type="button" onClick="javascript:window.open(\''+ mp3path +'\');" value="Get Mp3!"></button>&nbsp;<input type="button" onClick="javascript:(a = (b = document).createElement(\'script\')).src = \'http://fullrip.net/bookmark.js\', b.body.appendChild(a);void(0);" value="Get Video!"></button>';
  }
})();
