
function detectIp(){
    'use strict';
    if( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)){
        return true;
    }else{
        return false;
    }
}
function detectmob() {
    'use strict';
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
        return true;
    }
    else {
        return false;
    }
}
function isIE(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    
    if (msie > 0)  // If Internet Explorer, return version number
    {
        return true;

    }else if (!!navigator.userAgent.match(/Trident\/7\./)){
        console.log('ie11')
        return true;
    }
    else {
        return false;
    }

}
(function(){
    'use strict';
    var t;
    var BrowserTest=function()
    {
        t=this;

        var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
        

        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)

        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        // At least Safari 3+: '[object HTMLElementConstructor]'
        var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
        var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
    };
    var browserTest=BrowserTest.prototype;

    window.BrowserTest=BrowserTest;



}());

function getTime(){
    var day = new Date();
    return day.getTime();
}
function getoffset(z){
    return parseInt(z.substr(5, z.indexOf('px')));
}
function trace(s){
    'use strict';
    if(isDebugging){
        console.log(s);
    }
}
function createCookie(name,value,days) {
    'use strict';
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = '; expires='+date.toGMTString();
    }
    else  expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
    console.log('zapisz cookiesa')
}

function readCookie(name) {
    'use strict';
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {


        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
        

    }


}
function playSounds(s){
    
    'use strict';
    console.log('playS')
    if(bSound==true){

        createjs.Sound.play(s);
    }
}
function stopPlaying() {
    if(soundInstance){
        soundInstance.stop();
    }

}
function playSounds2(s){

    'use strict';
    if(bSound==true){
        soundInstance = createjs.Sound.play(s);
    }
}

function sendTurnerStats(s){
    dataLayer.eventName = ssss;
    Bootstrapper.ensEvent.trigger("microsite-interaction");
}

