
(function(){
    'use strict';
    var t;
    var state=1;
/// UWAGA NIE PRZETESTOWANE - NOWA INICJALIZACJA KLASSY
    //
    function OnOffBtt(_bgd,_bgdOver) {
        this.Container_constructor();

        this.init(_bgd,_bgdOver);
    }

    var onoffbutton = c.extend(OnOffBtt,c.Container);
    onoffbutton.init = function(_bgd,_bgdOver){
        t = this;
        t.clicktarget=null;
        this.mouseChildren=false;
        this.bgd=new createjs.Bitmap(_bgd);
        this.addChild(this.bgd);
        this.bgdOver=new createjs.Bitmap(_bgdOver);
        this.addChild(this.bgdOver);
        this.bgdOver.alpha=0;
        this.addEventListener('click', click);
    };

    function click(e)
     {
         var music;
        state++;
         if(state>1){
             state=0;
            music  = document.getElementById('music');
             music.pause();
         }else{
              music = document.getElementById('music');
             music.play();
         }
         t.bgdOver.alpha=!state;
         globals.bSound=state;


     }
    window.OnOffBtt = c.promote(OnOffBtt, "Container");

}());
