
(function()
{
    'use strict';
    var t;

    var tofound,c,timer,level,timer2;
    var bgd
    var Engine=function()
    {

        t = this;
        this.initialize();
    };
    var engine=Engine.prototype=new createjs.Container();
    engine.Container_initialize=engine.initialize;
    engine.initialize=function() {
        setTimeout(function(){t.mouseEnabled = true;},1000);
       bgd =new createjs.Bitmap(main.loadedData.getResult('l1'));
        t.addChild(bgd);

        kalka.addEventListener('click',onNextLevel);


       // addHUD();
        
    };
    
    function addHUD(){
        
       c = new createjs.Container();
        t.addChild(c);
        c.x = 9;
        c.y = 474;
        var sh = new createjs.Shape(new createjs.Graphics().beginFill('#89338D').drawRect(0,0,201,33));
        c.addChild(sh);
        var tt = new createjs.Text(strings.pages.game.title.text, strings.pages.game.title.font,'#fff');
        tt.lineWidth=201;
        tt.textAlign='center';
        tt.textBaseline = "alphabetic";
        tt.x = 100+strings.pages.game.title.x;
        tt.y = 3+strings.pages.game.title.y;

        c.addChild(tt);
        tofound = currentData.length;
        for(var i=0;i<currentData.length;i++){
            
            var lemm = new createjs.Bitmap(main.loadedData.getResult('lemming'));
            lemm.x = 211+(20*i);
            lemm.y = 5;
            lemm.name = 'l'+i;
            c.addChild(lemm);

            var lemm2 = new createjs.Bitmap(main.loadedData.getResult('l'+main.nCurrentLevel+"_"+ver+"_"+i));
            lemm2.name='lemming'+i;
            lemm2.x = currentData[i].x;
            lemm2.y = currentData[i].y;
            lemm2.addEventListener('click',onClickLemming);
            t.addChild(lemm2);
        }
         sh = new createjs.Shape(new createjs.Graphics().beginFill('#fff').drawRect(201,0,20+(20*i),33));
         c.addChildAt(sh,0);


        sh = new createjs.Shape(new createjs.Graphics().beginFill('#53B7E7').drawRect(755,0,117,33));
        c.addChildAt(sh,0);

        sh = new createjs.Shape(new createjs.Graphics().beginFill('#EB008B').drawRect(871,0,73,33));
        c.addChildAt(sh,0);


        var tt = new createjs.Text(main.nCurrentLevel+'/3', '30px GarageGothic-Bold' ,'#000');
        tt.textBaseline = "alphabetic";
        tt.textAlign='left';
        tt.x = 888;
        tt.y = -2;

        c.addChild(tt);


        timer = new Timer();
        t.addChild(timer);

        timer.x = 825;
        timer.y = 473;
        //timer.addEventListener('end',onGameOver);
        //timer.addEventListener('start',startGame);
    }

    function onNextLevel(){
            main.nCurrentLevel++;
        if(main.nCurrentLevel==3){
            t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
        }else{
            t.dispatchEvent({param: NextLevel, type:'changePage',bubbles:true,cancelable:true});
        }
    }
    /*
    function onClickLemming(e){
        console.log('click');
        if(main.sound){
            createjs.Sound.play('s2');
        }


        var n = e.currentTarget.name.substr(1);

        var lemm = new createjs.Bitmap(main.loadedData.getResult('lemming_on'));
        lemm.x = 211+(20*found);
        lemm.y = 5;
        lemm.name = 'l'+found;
        c.addChild(lemm);
        found++;
        e.currentTarget.visible = false;
        if(found==tofound){
            timer.destroy();

            main.best = main.time;
            var dane = readCookie('grizzli_game1_level'+main.nCurrentLevel);
            if(dane=='undefined'||dane==null){
                createCookie('grizzli_game1_level'+main.nCurrentLevel,main.mili+"_"+main.time,30);
            }else{
                var data = readCookie('grizzli_game1_level'+main.nCurrentLevel);
                data = data.split('_');
                if(data[0]<main.mili){
                    main.mili = data[0];
                    main.best=data[1];


                }else{

                    createCookie('grizzli_game1_level'+main.nCurrentLevel,main.mili+"_"+main.time,30);
                }
            }


            

            main.level = readCookie('grizzli_game1_level');
            if(main.level=='undefined'||main.level==null||main.level<main.nCurrentLevel)createCookie('grizzli_game1_level',main.nCurrentLevel,30);
            
            
            
            if(main.nCurrentLevel==3){
                t.dispatchEvent({param: GameOver, type:'changePage',bubbles:true,cancelable:true});
            }else{
                t.dispatchEvent({param: NextLevel, type:'changePage',bubbles:true,cancelable:true});
            }
        }


         }*/

    window.Engine=Engine;

}());
