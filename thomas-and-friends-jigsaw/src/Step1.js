
(function()
{
    'use strict';
    var t,btt2,btt1,z1,z2,z3,txt2,bl,br,tl,easy,veryhard,hard,intro_logo,toonix_pasek,select_bl_toonix,toonix_p1;
    var helpAppla,intro_logo_game;
    var toonixAnimContainer,bgd;
    var aC=[[418,126],[889,124],[651,63]];
    var Step1=function()
    {


        t = this;
        this.initialize();

    };
    var p=Step1.prototype=new c.Container();
    p.initialize=function() {


        bgd=new c.Bitmap(main.loadedData.getResult('bgd'));

        t.addChild(bgd);

        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.x = 1083;
        btt1.y = 615;
        TweenLite.from(btt1,.5,{alpha:0,y:800,delay:2,onComplete:wlaczbtt1});

         bl=new c.Bitmap(main.loadedData.getResult('intro_bl'));
        bl.x = -1200;
        bl.y = 661;
        t.addChild(bl);
        TweenLite.to(bl,1,{delay:.7,x:0,ease:Strong.easeOut});




        intro_logo=new FrameBtt(main.loadedData.getResult('intro_logo'),main.loadedData.getResult('intro_logo_over'));
        intro_logo.x = 597;
        intro_logo.y = 587;
        intro_logo.mouseEnabled=false;
        TweenLite.from(intro_logo,1,{delay:.7,x:14,y:768,ease:Strong.easeOut,onComplete:wlaczbtt1});
        intro_logo.addEventListener('click',onAnim1);
        


        intro_logo_game=new c.Bitmap(main.loadedData.getResult('intro_logo_game'));
        intro_logo_game.regX = intro_logo_game.image.width/2;
        intro_logo_game.regY = intro_logo_game.image.height/2;
        intro_logo_game.x = 628+intro_logo_game.regX;
        intro_logo_game.y = 352+intro_logo_game.regY;
        intro_logo_game.mouseEnabled=false;

        TweenLite.from(intro_logo_game,1,{delay:.7,scale:0,ease:Bounce.easeOut});

        t.addChild(intro_logo);


        var card;
        for (var i=0;i<3;i++){
            card=new c.Bitmap(main.loadedData.getResult('intro_c'+i));
            card.x = aC[i][0]+card.image.width/2;
            card.y = aC[i][1]+card.image.height/2;
            card.regX = card.image.width/2;
            card.regY = card.image.height/2;
            card.name = 'c'+i;

            TweenLite.from(card,.5,{delay:1.2+i*.2,scaleX:0,scaleY:0,x:743,y:458,ease:Strong.easeOut,onStart:playS,onComplete:wlaczMnie,onCompleteParams:[card]})
            t.addChild(card);
            
        }
        t.addChild(btt1);
        btt1.addEventListener('click',onAnim1);
        t.addChild(intro_logo_game)
        legal=new c.Bitmap(main.loadedData.getResult('legal'))
        legal.y=742;
        stage.addChild(legal);
        main.resize();
    };

    function playS(){
        if(globals.bSound){
            c.Sound.play('tap');
        }
    }
    function wlaczMnie(zz){

        zz.addEventListener('mouseover',onMO);
        zz.addEventListener('mouseout',onMOU);
        zz.addEventListener('click',onMO2);
    }
   function  resumeAudioContext() {

       // handler for fixing suspended audio context in Chrome

       try {

           if (c.WebAudioPlugin.context.state === "suspended") {

               c.WebAudioPlugin.context.resume();

           }

       } catch (e) {


           console.error("There was an error while trying to resume the SoundJS Web Audio context...");

           console.error(e);
       }
   }
    function onMO2(e){
        var z= e.currentTarget.name.substr(1);
        TweenLite.to(e.currentTarget,.5,{x:aC[z][0]+(e.currentTarget.image.width/2),y:aC[z][1]+(e.currentTarget.image.height/2)-30,ease:Strong.easeOut})
        TweenLite.to(e.currentTarget,.5,{delay:.5,x:aC[z][0]+(e.currentTarget.image.width/2),y:aC[z][1]+(e.currentTarget.image.height/2),ease:Strong.easeOut})
    }


    function onMO(e){
        var z= e.currentTarget.name.substr(1);
        TweenLite.to(e.currentTarget,.5,{x:aC[z][0]+(e.currentTarget.image.width/2),y:aC[z][1]+(e.currentTarget.image.height/2)-30,ease:Strong.easeOut})
    }

    function onMOU(e){
        var z= e.currentTarget.name.substr(1);
        TweenLite.to(e.currentTarget,.5,{x:aC[z][0]+(e.currentTarget.image.width/2),y:aC[z][1]+(e.currentTarget.image.height/2),ease:Strong.easeOut})
    }

    function onAnim1(){
        resumeAudioContext();
        playSounds('empty');


        TweenLite.to(btt1,.5,{alpha:0,y:800});
        intro_logo.mouseEnabled=false;
        btt1.mouseEnabled=false;
        for (var i=0;i<3;i++){
            var card = t.getChildByName('c'+i);
            TweenLite.to(card,.5,{delay:i*.1,scaleX:0,scaleY:0,x:743,y:458,ease:Strong.easeIn,onComplete:wylaczMnie,onCompleteParams:[card]})
        }


    }
    function wylaczMnie(zz){

        stage.removeChild(legal);
        t.removeChild(zz);
        TweenLite.to(intro_logo_game,1,{scale:0,ease:Elastic.easeOut});
        if(zz.name =='c2'){
            TweenLite.to(intro_logo,.4,{x:14,y:779,ease:Strong.easeIn});
            TweenLite.to(bl,.5,{delay:.1,x:-1400,ease:Strong.easeIn,onComplete:wylaczGre2});
        }

    }
    p.dispatchStep = function(){

        
    };
    function wlaczbtt1(){
        intro_logo.mouseEnabled=true;
    }



    function wylaczGre2(){

        t.dispatchEvent({param: Game, type:'changePage',bubbles:true,cancelable:true});
    }



    window.Step1=Step1;

}());
