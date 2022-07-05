
function detectApple(){
    'use strict';

    return /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) &&
        !window.MSStream;
}
function detectMobile() {
    'use strict';

    return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || detectApple());
}
function getoffset(z){
    return parseInt(z.substr(0, z.indexOf('px')));
}
function trace(s){
    'use strict';
    if(globals.isDebugging){
        console.log(s);
    }
}
function createCookie(name,value,days) {
    /*
    'use strict';
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = '; expires='+date.toGMTString();
    }
    else  expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
    */
    try{
        localStorage.setItem(name,value);
    }catch(e){

    }

}

function readCookie(name) {
    /*
    'use strict';
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    */

//    return null;
    try{
        return localStorage.getItem(name);
    }catch(e){
        return null;
    }

}
function addSeparatorToNumber(number){

    var separator=',';
    if(Number(number)&&number>999){
        var zz = number.toString();
         return(zz.substr(0,zz.length-3)+separator+zz.substr(zz.length-3));

    }else{
        return number;
    }

}

function playSounds(s){

    'use strict';
    
    if(globals.bSound==true){
        createjs.Sound.play(s);
    }
}
function stopPlaying() {
    if(globals.soundInstance){
        globals.soundInstance.stop();
    }

}
function playSounds2(s){

    'use strict';
    if(globals.bSound==true){
        globals.soundInstance = createjs.Sound.play(s);
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


function centerLoginBox() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf('android') > -1;
    if (isAndroid) {

        if (window.orientation == 0 || window.orientation == 180) { //Landscape Mode
            return false;

        }
        else if (window.orientation == 90 || window.orientation == -90) { //Portrait Mode
            return true;
        }
    }
    else {
        if (window.orientation == 90 || window.orientation == -90) { //Landscape Mode
            return true;
        }
        else if (window.orientation == 0 || window.orientation == 180) { //Portrait Mode
            return false;
        }
    }
}

function getBool(val) {
    return !!JSON.parse(String(val).toLowerCase());
}