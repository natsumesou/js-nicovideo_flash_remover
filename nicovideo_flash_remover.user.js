// ==UserScript==
// @name        nicovideo_flash_remover
// @namespace   http://natsu.me
// @description hide nicovideo's flash player
// @include http://www.nicovideo.jp/watch/*
// ==UserScript==


(function(){
    var flash = document.getElementById('flvplayer_container');
    if(flash){
        flash.parentNode.removeChild(flash);
    }
})();

