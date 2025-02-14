let timer;
let points;
let pause;
(function()
{
    'use strict';
    let t,ticker,hud,txt_points,one,two,three;
    let startAnim;
    let lives;
    let slots;
    var Game=function()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var p = c.extend(Game, c.Container);

    p.initialize=function() {
        var bb = new c.Bitmap(main.loadedData.getResult('bgd'));
        t.addChild(bb);
        ticker = new c.Container();
        bb = new c.Bitmap(main.loadedData.getResult('ticker_bgd'));
         lives = 10;
        let t1 = new c.Text(strings.ticker.text, strings.ticker.font, '#fff');
        ticker.addChild(bb);

        ticker.addChild(t1);
      t1.y = 115+strings.ticker.y;
        t1.x = 54+270+strings.ticker.x;

        t1.textAlign='right';
        t1.textBaseline = "alphabetic";
        t.mouseEnabled = true;

        ticker.x = 620;
        ticker.y = 720;
        t.addChild(ticker)
        points=0;

        pause = new c.Bitmap(main.loadedData.getResult('pauseScreen'));
        pause.x = pageContainer.x;
        pause.addEventListener('click',resumeAll);

        addHud();
    };

    const addHud=()=>{


        one = new c.Bitmap(main.loadedData.getResult('1'))
        one.regX = one.image.width/2;
        one.regY = one.image.height/2;
        one.x = 1680/2;
        one.y = 720/2;
        t.addChild(one)

        two = new c.Bitmap(main.loadedData.getResult('2'))
        two.regX = two.image.width/2;
        two.regY = two.image.height/2;
        two.x = 1680/2;
        two.y = 720/2;
        t.addChild(two)

        three = new c.Bitmap(main.loadedData.getResult('3'))
        three.regX = three.image.width/2;
        three.regY = three.image.height/2;
        three.x = 1680/2;
        three.y = 720/2;
        t.addChild(three)
        one.alpha=two.alpha = three.alpha =0;


        hud = new c.Container();
        let b = new c.Bitmap(main.loadedData.getResult('hud_bgd'))
        hud.addChild(b);
        hud.x= 483;
        hud.y=-150;
        t.addChild(hud);

        for (var i = 0;i<10;i++){
            let life = new c.Bitmap(main.loadedData.getResult('life'))
            hud.addChild(life);
            life.name = 'l'+parseInt(10-i);
            console.log(life.name)
            life.x = 275+i*41;
            life.y = 26;
        }


        txt_points = new c.Text('0', "36px Cervo", '#fff');
        txt_points.lineWidth = 113;
        txt_points.textAlign='center';
        txt_points.textBaseline = "alphabetic";
        hud.addChild(txt_points);
        txt_points.x = 74+111/2;
        txt_points.y = 59;

        startAnim = gsap.timeline();

        startAnim.to(hud,{y:2,ease:Power3.easeOut});
        startAnim.to(ticker,{y:578,ease:Power3.easeOut},'<');
        startAnim.fromTo(three,{alpha:0,scaleX:2,scaleY:2},{alpha:1,scaleX:1,scaleY:1,duration:.5,ease:Power3.easeOut,onComplete:()=>{
                playSounds('countdown')}},'<');
        startAnim.to(three,{alpha:0,scaleX:0,scaleY:0,duration:.5,ease:Power3.easeOut},'>');
        startAnim.fromTo(two,{alpha:0,scaleX:2,scaleY:2},{alpha:1,scaleX:1,scaleY:1,duration:.5,ease:Power3.easeOut},'>');
        startAnim.to(two,{alpha:0,scaleX:0,scaleY:0,duration:.5,ease:Power3.easeOut},'>');
        startAnim.fromTo(one,{alpha:0,scaleX:2,scaleY:2},{alpha:1,scaleX:1,scaleY:1,duration:.5,ease:Power3.easeOut},'>');
        startAnim.to(one,{alpha:0,scaleX:0,scaleY:0,duration:.5,ease:Power3.easeOut,onComplete:startGame},'>');
    };

    const startGame=()=>{
        console.log('pause visible')
        pauseBtt.visible = true;
        slots = new Slots();
        t.addChildAt(slots,t.numChildren-5);

    }
    p.removeLive = function(){

        console.log('usuwam zycie');

        hud.getChildByName('l'+parseInt(11-lives)).visible = false;
        lives--;
        if(lives===0){

            gameover();
        }

    }
    p.addPoints = function(val){
        points =Math.max((points+val),0);
        txt_points.text = points;
    }

    const destroyAndReset=()=>{

        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    };
    const gameover=()=>{
        pauseBtt.visible = false;
        slots.destroySlots();

        t.removeChild(slots);
        slots = null;

        let endAnim = gsap.timeline();
        endAnim.to(hud,{duration:1,y:-150,ease:Back.easeOut});
        endAnim.to(ticker,{y:750,duration:1,onComplete:destroyAndReset},'<');
    }
    p.pauseGame = function(){
        if(slots)slots.visible = false;

        console.log('pause')
        stage.addChild(pause);


    };

    p.resumeGame = function(){
        console.log('unpause')
        stage.removeChild(pause);

        if(slots)slots.visible = true;

    }

    p.dispatchStep1=function(){

        //music.stop()

        gsap.globalTimeline.pause();
        gsap.globalTimeline.clear();
        gsap.globalTimeline.resume();

        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }



    window.Game = c.promote(Game, "Container");

}());
