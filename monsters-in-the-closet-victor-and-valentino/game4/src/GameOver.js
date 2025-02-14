
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,dymek,btt1,t1,t2,t3,btt2;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function() {
        playSounds('game_over');
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_complete_bgd'));
        t.addChild(bmp);

        var cont = new c.Container();
        cont.x = 880;
       var bmp1 = new c.Bitmap(main.loadedData.getResult('game_over_appla'));
        cont.addChild(bmp1);

        t1 =   new c.Text(strings.pages.game_over.game_complete_t1.text, strings.pages.game_over.game_complete_t1.font, '#922a24');
        t1.textAlign = 'center';
        t1.x = 408/2-15;
        t1.lineWidth=408;
        t1.y = 199;

        t2 =   new c.Text(strings.pages.game_over.time_left.text, strings.pages.game_over.time_left.font, '#3B7949');
        t2.textAlign = 'center';
        t2.x = 408/2-15;
        t2.lineWidth=408;
        t2.y = 299;
        t3 =   new c.Text(timeleftl2, "76px lubalin", '#3D6FB3');

        t3.textAlign = 'center';
        t3.x = 408/2-15;
        t3.lineWidth=408;
        t3.y = 335;

        cont.addChild(t2,t3);


        t.addChild(bmp);

        cont.addChild(t1);
        TweenLite.from(cont,2,{y:-650,ease:Bounce.easeOut});
        t.addChild(cont);


        var p1 = new c.Bitmap(main.loadedData.getResult('game_completed_grandma'));
        p1.x = 437;
        p1.y = 160;
        t.addChild(p1);
        TweenLite.from(p1,1,{alpha:0,ease:Strong.easeOut});


         p1 = new c.Bitmap(main.loadedData.getResult('game_completed_valentino'));
        p1.x = 350;
        p1.y = 257;
        t.addChild(p1);
        TweenLite.from(p1,1,{x:-400,ease:Strong.easeOut,delay:.7});

        p1 = new c.Bitmap(main.loadedData.getResult('game_completed_victor'));
        p1.x = 743;
        p1.y = 281;
        t.addChild(p1);
        TweenLite.from(p1,1,{x:1600,ease:Strong.easeOut,delay:.4});


/*

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 983+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
*/


        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 894+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);




        btt2 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.continue);
        btt2.regX = 188/2;
        btt2.regY = 182/2;
        btt2.x = 1080+btt2.regX;
        btt2.y = 447+btt2.regY;
        t.addChild(btt2);

        //btt1.scaleX = btt1.scaleY = btt2.scaleY=btt2.scaleX = 0.7
       // TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
       // TweenLite.from(btt2,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        btt2.addEventListener('click',onHome);

		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gamewin",
                "gamewin": "1",
                "gamelevel": "1",
                "minigametitle":'cleanup challenge',
                "gametitle": "victor and valentino",
                "englishname": "victor and valentino",
                "gamecategory": "arcade",
                "brand": 'cartoon network',

                "gamemilestonename": 'nvs',
                "gamemap": 'nvs',
                "gamecharacter": 'nvs',
                "gameitem": 'nvs'
            }
			   });
					
			
			turner_metadata.trackAction.push({
               "type": "game", 
                "data": {
                    "pageName": params.pageName,
                    "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                    "interaction": "gamecomplete",
                    "gamecomplete": "1",
                    "minigametitle":'cleanup challenge',
                    "gametitle": "victor and valentino",
                    "englishname": "victor and valentino",
                    "gamecategory": "arcade",
                    "brand": 'cartoon network',
                    "gamelevel": 'nvs',
                    "gamemilestonename": 'nvs',
                    "gamemap": 'nvs',
                    "gamecharacter": 'nvs',
                    "gameitem": 'nvs'
                }
        });




    };

    function onHome(){

        window.location.href='../index.html?pageName='+params.pageName+'&cid='+params.cid;
    }


    function onDispatch(){
		
			turner_metadata.trackAction.push({
               "type": "game", 
                "data": {
                    "pageName": params.pageName,
                    "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                    "interaction": "game level",
                    "gamelevelreplay": "1",
                    "minigametitle":'cleanup challenge',
                    "gametitle": "victor and valentino",
                    "englishname": "victor and valentino",
                    "gamecategory": "arcade",
                    "brand": 'cartoon network',
                    "gamelevel": '1',
                    "gamemilestonename": 'nvs',
                    "gamemap": 'nvs',
                    "gamecharacter": 'nvs',
                    "gameitem": 'nvs'
                }
        });
        t.mouseEnabled = false;
        t.dispatchEvent({param: Step1, type:'changePage',bubbles:true,cancelable:true});
    }

    window.GameOver = c.promote(GameOver, "Container");

}());
