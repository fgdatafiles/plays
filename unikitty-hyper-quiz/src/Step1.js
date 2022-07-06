
(function()
{

    var t;
    function Step1() {
        this.Container_constructor();

        this.init();
    }

    var step1 = c.extend(Step1,c.Container);
    step1.init = function(){
        t = this;
        var bgd=new c.Bitmap(main.loadedData.getResult('splash_bgd'));
        t.addChild(bgd);

        bgd =new c.Bitmap(main.loadedData.getResult('splash_characters'));
        bgd.regX = bgd.image.width/2;
        bgd.regY = bgd.image.height/2;
        t.addChild(bgd);
        bgd.x =202+bgd.regX;
        bgd.y =0+bgd.regY;
        TweenLite.from(bgd,1,{scaleX:0,scaleY:0,delay:.5,ease:Power1.easeOut});

        var logo = new c.Container();
        logo.x = 265;
        logo.y = 306;
        t.addChild(logo);
        bgd = new c.Bitmap(main.loadedData.getResult('splash_logo'));
        logo.addChild(bgd);
        console.log(globals.strings);
        var txt = new c.Text(globals.strings.pages.splash.title.text, globals.strings.pages.splash.title.font, '#000');

        txt.lineWidth = 494;
        txt.textAlign = 'center';
        txt.textBaseline = 'alphabetic';
        txt.x =494/2+ globals.strings.pages.splash.title.x;

        txt.y =114+ globals.strings.pages.splash.title.y+getoffset(globals.strings.pages.splash.title.font);

        logo.addChild(txt);



        var next = new FrameBtt(main.loadedData.getResult('big_btt_off'),main.loadedData.getResult('big_btt_on'),globals.strings.pages.splash.start_button,'boink');
        
        t.addChild(next);
        next.x = 305;
        next.y= 495;
        next.addEventListener('click',onStep2);

        TweenLite.from(next,1,{y:1200,ease:Power1.easeOut});
        TweenLite.from(logo,1,{y:-200,delay:1.5,ease:Power2.easeOut});



    };

    function onStep2(){

        changeToStep2();
    }
    function changeToStep2(){
        TweenMax.killAll();
       t.dispatchEvent({param: Step2, type:'changePage',bubbles:true,cancelable:true});
    }
    window.Step1 = c.promote(Step1, "Container");

}());
