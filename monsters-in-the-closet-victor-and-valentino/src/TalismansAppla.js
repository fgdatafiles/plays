
(function()
{
    'use strict';

    var t,arrows,icon,closeBtt,helpBtt,helpAppla,bgd;
    function TalismansAppla(n)
    {
        this.Container_constructor();
        t = this;
        this.initialize(n);
    };
    var tali_appla = c.extend(TalismansAppla, c.Container);


    tali_appla.initialize=function(n) {

        console.log('talizma numer: '+n);
        playSounds('game_over');
        this.Container_initialize();

        bgd =  new c.Bitmap(main.loadedData.getResult('found_talisman_appla'));
        t.addChild(bgd);

        closeBtt = new  FrameBtt(main.loadedData.getResult('close_talisman_big_btt_off'),main.loadedData.getResult('close_talisman_big_btt_on'));
        closeBtt.x = 333;
        this.addChild(closeBtt);
        closeBtt.addEventListener('click',onCloseAppla);

        icon =  new c.Bitmap(main.loadedData.getResult('talisman'+n));
        t.addChild(icon);
        icon.x = 148;
        icon.y = 148;

       var txt = new c.Text(strings.pages.global.talisman_founded.text, strings.pages.global.talisman_founded.font, '#fff');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width+strings.pages.global.talisman_founded.x;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =90+strings.pages.global.talisman_founded.y;

         txt = new c.Text(strings.pages.global['talisman'+n+'_name'].text, strings.pages.global['talisman'+n+'_name'].font, '#080929');
        t.addChild(txt);
        txt.mouseEnabled = false;

        txt.lineWidth = bgd.image.width+strings.pages.global['talisman'+n+'_name'].x;
        txt.textAlign='center';
        txt.x =txt.lineWidth/2;
        txt.y =320+strings.pages.global['talisman'+n+'_name'].y;
        this.scaleX = this.scaleY = 0;
        TweenLite.to(this,1,{scale:1});



    };

    function onCloseAppla(){

        t.dispatchEvent('close_appla');
    }

    window.TalismansAppla = c.promote(TalismansAppla, "Container");


}());
