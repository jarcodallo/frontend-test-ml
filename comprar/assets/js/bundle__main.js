(function(){
  "use strict";
  document.addEventListener("DOMContentLoaded", function(event) {
    var btnFB = document.querySelector(".icon-facebook");
    var btnTW = document.querySelector(".icon-twitter");
    btnFB.addEventListener("click", share_fb);
    btnTW.addEventListener("click", share_tw);
  });
  var share_fb = function (e) {
    e.preventDefault();
    share(window.location.href, 'fb');
  };
  var share_tw = function (e) {
    e.preventDefault();
    var data = e.target.getAttribute("data-info");
    share(data, 'tw');
  };
  var share = function(dat, social){
    var winWidth = 520;
    var winHeight = 350;
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    if (social == 'fb'){
      window.open('http://www.facebook.com/sharer.php?s=100&p[url]=' + dat, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }else {
      window.open('https://twitter.com/home?status=' + encodeURI(dat), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    }
  }
})();
