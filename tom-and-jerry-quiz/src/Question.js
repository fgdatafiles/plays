
(function()
{
    'use strict';
    var t;
    var odpowiedz1,odpowiedz2,odpowiedz3,offset,odpowiedz4;
    var Question=function()
    {

        this.bgd;
        this.circ;
        this.logo;
        this.up;
        this.down;
        this.btn;
        this.cont;
        this.pos = [107,296,483,671];
        t = this;
        this.initialize();

    };


    var p=Question.prototype=new createjs.Container();
    p.Container_initialize=p.initialize;
    p.initialize=function() {

        this.mouseEnabled=false;
        this.Container_initialize();

        var kalka=new createjs.Bitmap(main.loadedData.getResult('game_bgd'));
        t.addChild(kalka);



        t.cont = new createjs.Container();

        t.cont.x=0;
        t.cont.y=0;


        var t1  = new createjs.Text(main.nCurrentLevel+'/5', '60px GarageGothic-Bold','#8B2B81');
        t1.textBaseline = "alphabetic";
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.x = 864;
        t1.y = 452+offset;
        t.cont.addChild(t1);



        var obj = strings.pages.game['question'+main.nCurrentLevel];


        var t2  = new createjs.Text(obj.title.text, obj.title.font,'#000');
        t2.textBaseline = "alphabetic";
        offset = t2.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t2.x = 370+obj.title.x;
        t2.y = -148+offset+obj.title.y;
        t.addChild(t2);
        TweenLite.to(t2,1,{delay:1.4,y:14+offset});


        var cont2 = new createjs.Container();
        cont2.x = 0;
        cont2.y = -300;
        TweenLite.to(cont2,1,{delay:1,y:0});
        var tr2 = new createjs.Bitmap(main.loadedData.getResult('yell'));
        tr2.x=144;
        tr2.y=101;
        cont2.addChild(tr2);

  
        var t3  = new createjs.Text(obj.question.text, obj.question.font,'#853995');
        t3.textBaseline = "alphabetic";
        offset = t3.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t3.lineHeight=32;
        t3.textAlign = 'center';
        t3.lineWidth = 944;

        t3.x = 472+obj.question.x;
        t3.y = 130+obj.question.y+offset;
        cont2.addChild(t3);



         odpowiedz1 = new Podest(1);
        t.addChild(odpowiedz1);
        odpowiedz1.x = this.pos.splice([Math.floor(this.pos.length*Math.random())],1);
        odpowiedz1.y=397;
         odpowiedz2 = new Podest(2);
        t.addChild(odpowiedz2);
        odpowiedz2.x = this.pos.splice([Math.floor(this.pos.length*Math.random())],1);
        odpowiedz2.y=397;
         odpowiedz3 = new Podest(3);
        t.addChild(odpowiedz3);
        odpowiedz3.x = this.pos.splice([Math.floor(this.pos.length*Math.random())],1);
        odpowiedz3.y=397;
        odpowiedz4 = new Podest(4);
        t.addChild(odpowiedz4);
        odpowiedz4.x = this.pos.splice([Math.floor(this.pos.length*Math.random())],1);
        odpowiedz4.y=397;

        t.addChild(cont2);
        t.addChild(t.cont);
        odpowiedz1.alpha=odpowiedz2.alpha=odpowiedz3.alpha=odpowiedz4.alpha=0;

        TweenLite.to(odpowiedz1,1,{y:317,ease:Strong.easeOut,delay:1.8,alpha:1});
        TweenLite.to(odpowiedz2,1,{y:317,ease:Strong.easeOut,delay:2,alpha:1});
        TweenLite.to(odpowiedz3,1,{y:317,ease:Strong.easeOut,delay:2.2,alpha:1});
        TweenLite.to(odpowiedz4,1,{y:317,ease:Strong.easeOut,delay:2.4,onComplete:wlaczMouse,alpha:1});

        odpowiedz1.addEventListener('customclick',wlaczNext);
        odpowiedz2.addEventListener('customclick',wlaczNext);
        odpowiedz3.addEventListener('customclick',wlaczNext);
        odpowiedz4.addEventListener('customclick',wlaczNext);

        var back = new  FrameBtt(main.loadedData.getResult('home'),main.loadedData.getResult('home_on'),'#ffffff',strings.pages.game.back_button);
        back.addEventListener('click',onBackToHome);
        t.addChild(back);
        back.y = 430;

        
    };
    function onBackToHome(){

        t.mouseEnabled = false;
        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});

        setTimeout(wlacz2,500);


    }
    function wlaczMouse(){
        this.mouseEnabled=true;
        odpowiedz1.wlacz();
        odpowiedz2.wlacz();
        odpowiedz3.wlacz();
        odpowiedz4.wlacz();

    }
    function wlaczNext(e){

        odpowiedz1.wylacz();
        odpowiedz2.wylacz();
        odpowiedz3.wylacz();
        odpowiedz4.wylacz();

        t.mouseEnabled=false;
        main.answers.push(e.param);

        setTimeout(function(){
            dispatchEnd();
        },1000)
    }
    function dispatchEnd(){

        main.nCurrentLevel++;

        if(main.nCurrentLevel<6){

            t.dispatchEvent({param: Question, type:'changePage',bubbles:true,cancelable:true});

        }else{
            t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
        }

    }


    window.Question=Question;

}());
