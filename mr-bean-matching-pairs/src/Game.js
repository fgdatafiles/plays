var cardprefix;
(function()
{
    'use strict';
    var t;
    var timer;
    var card,toonix_pasek,select_bl_toonix,toonixAnimContainer;
    var container,wybor;
    var available =[0,1,2,3,4,5,6,7,8,9];
    var n1,n2,intro_logo_game,cartoonito;
    var klikniecia=0;
    var pary=0;


    var jj = [3,3,3,3];


    var nPary=[5,6,8,9];
    var linie=[4,4,6,6];
    var nOdstepy=[[198,198],[199,199],[167,170],[168,170]];
    var nDelay=[0.35,0.20,0.11,0.08];
    var nStartXY= [[569,28],[569,28],[461,63],[461,103]];


    var ok;
    var ok2;

    var Game=function()
    {

        t = this;

        this.initialize();
    };
    var p=Game.prototype=new c.Container();
    p.initialize=function() {

        var bgd = new c.Bitmap(main.loadedData.getResult('bgd_game_'+main.nCurrentLevel));
        t.addChildAt(bgd);


        var boom = new c.Bitmap(main.loadedData.getResult('logo_cn'));
        t.addChildAt(boom);
        boom.x=498;
        boom.y=639;
        t.addChild(boom)


        boom = new c.Bitmap(main.loadedData.getResult('logo_yabba_small'));
        t.addChildAt(boom);
        boom.x=1278;
        boom.y=631;
        t.addChild(boom)



        available =[0,1,2,3,4,5,6,7,8,9];
        pary = 0;
        klikniecia =0;


        soundBtt.visible = true;
        homeBtt.visible = true;

        if(globals.bSound){
            c.Sound.play('shuffle');
        }






        rozlorz();
        timer = new Timer();
        t.addChild(timer);

        timer.addEventListener('end',onGameOver);
        timer.addEventListener('start',startGame);

        ok = new c.Bitmap(main.loadedData.getResult('ok'));
        ok2 = new c.Bitmap(main.loadedData.getResult('ok'));

        ok.regX = 137/2;
        ok.regY = 51;
        ok.x = -120;
        ok.y = 0;
        t.addChild(ok);

        ok2.regX = 137/2;
        ok2.regY = 51;
        ok2.x = -120;
        ok2.y = 0;
        t.addChild(ok2);
    };

    p.dispatchStep1 = function(){

        TweenMax.killAll();
        timer.destroy();
        t.dispatchEvent({param: ResetClass, type:'changePage',bubbles:true,cancelable:true});
    };



    function readyAnim(){
        cartoonito.gotoAndPlay('playing');
        main.animationInterval = setInterval(wlaczwylaczAnimacje,10000);
    }

    function wlaczwylaczAnimacje(){
        if(cartoonito.currentAnimation=='stopMe'){
            cartoonito.gotoAndPlay('playing');
        }else{
            cartoonito.gotoAndPlay('stopMe');
        }

    }
    function startGame(){
        container.mouseEnabled = true;
    }
    function rozlorz(){
        shuffle();

        container = new c.Container();
        t.addChild(container);
        container.mouseEnabled = false;
        var licznik=0;

        if(main.nCurrentLevel==1||main.nCurrentLevel==3){
            cardprefix = '_1';
        }else{
            cardprefix = '';
        }
        for(var i=0;i<jj[main.nCurrentLevel];i++){

            for(var j=0;j<linie[main.nCurrentLevel];j++){

                if((main.nCurrentLevel==0)&&((i==0&&j==0)||(i==0&&j==3))){

                }else if(main.nCurrentLevel==2&&((i==0&&j==0)||(i==0&&j==5))){

                //}else if(main.nCurrentLevel==3&&((i==0&&j==0)||(i==0&&j==5)||(i==3&&j==0)||(i==3&&j==5))){

                } else{
                    console.log('card');
                    console.log(wybor[licznik]);
                    card = new Card(wybor[licznik]);

                    container.addChild(card);
                    card.alpha= 0;

                    card.x = nStartXY[main.nCurrentLevel][0]+j*nOdstepy[main.nCurrentLevel][0];

                    card.y=  nStartXY[main.nCurrentLevel][1]+i*nOdstepy[main.nCurrentLevel][1];
                    console.log(card.x+":"+card.y);
                    card.addEventListener('odw',klikniecie);
                    TweenLite.to(card,2,{delay:licznik*nDelay[main.nCurrentLevel],onStart:playS,alpha:1});
                    licznik++;

                }
            }
        }
    }
    function playS(){
        if(globals.bSound){
            c.Sound.play('tap2');
        }
    }
    function usun(){
        ok.x = -120;
        ok2.x = -120;
    }
    function klikniecie(e){
        
        if(klikniecia==0){
            n1 = e.currentTarget;
        }else if(klikniecia==1){
            n2 = e.currentTarget;
            container.mouseEnabled = false;

            if(n1.number==n2.number){
                setTimeout(reset,200);
               playSounds('success'+Math.ceil(Math.random()*2));


                TweenMax.killTweensOf(ok);
                TweenMax.killTweensOf(ok2);

                ok.scaleX = ok.scaleY =1;
                ok.alpha = 1;
                ok.x = e.currentTarget.x+68;
                ok.y = e.currentTarget.y+68+container.y;
                TweenLite.to(ok,1,{scaleX:2,scaleY:2,alpha:0,onComplete:usun});



                ok2.scaleX = ok2.scaleY =1;
                ok2.alpha = 1;
                ok2.x = n1.x+68;
                ok2.y = n1.y+68+container.y;
                TweenLite.to(ok2,1,{scaleX:2,scaleY:2,alpha:0,onComplete:usun});
            }else{
                setTimeout(reset,1000);
                playSounds('fail'+Math.ceil(Math.random()*2));
            }
        }
        klikniecia++;
    }
    function reset(){
        console.log(n1.number+":"+n2.number);
        if(n1.number==n2.number){
            n1.blokuj();
            n2.blokuj();
            pary++;
        }else{
            console.log('revert');
            n1.revert();
            n2.revert();
        }
        n1= null;
        n2= null;
        container.mouseEnabled = true;
        klikniecia=0;

        if(pary==nPary[main.nCurrentLevel]){
            timer.setEnd();
        }
    }
    function shuffle(){
        wybor =[];
        var av = available;
        for(var i=0;i<nPary[main.nCurrentLevel];i++){
            wybor.push(av.splice(Math.floor(Math.random()*av.length),1)[0]);
        }
        wybor=wybor.concat(wybor);
        shuffle2(wybor);
        console.log(wybor);

    }
    function onGameOver(e) {
        main.time = e.time;
        main.mili = e.mili;
        t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
    }
    function shuffle2(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    window.Game=Game;

}());
