
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,dymek,btt1,t1,t2,t3,kubel1,kubel2
    function LevelOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(LevelOver, c.Container);
    p.initialize=function() {
        backBtt.visible= true;


        var cont = new c.Container();
        cont.x = 880;
        bmp = new c.Bitmap(main.loadedData.getResult('game_over_appla'));
        cont.addChild(bmp);

        if(success){
            bmp = new  c.Bitmap(main.loadedData.getResult('game_over_bgd1'));
            playSounds('level_complete');

            t1 =   new c.Text(strings.pages.game_over.success_t1.text, strings.pages.game_over.success_t1.font, '#371B11');
            t1.textAlign = 'center';
            t1.x = 408/2-15;
            t1.lineWidth=408;
            t1.y = 223;

            t2 =   new c.Text(strings.pages.game_over.time_left.text, strings.pages.game_over.time_left.font, '#3B7949');
            t2.textAlign = 'center';
            t2.x = 408/2-15;
            t2.lineWidth=408;
            t2.y = 289;
            t3 =   new c.Text(timeleftl1, "76px lubalin", '#3D6FB3');
            t3.textAlign = 'center';
            t3.x = 408/2-15;
            t3.lineWidth=408;
            t3.y = 315;
            cont.addChild(t2,t3);
            btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.next_level,Level2);


             p1 = new c.Bitmap(main.loadedData.getResult('valentino_level_complete_success'));
            p1.x = 373;
            p1.y = 193;



             p2 = new c.Bitmap(main.loadedData.getResult('victor_level_complete_success'));
            p2.x = 711;
            p2.y = 220;


            TweenLite.from(p1,1,{x:-300});
            TweenLite.from(p2,1,{x:1700});
			
			
			
				
				
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
                    "gamemap": 'underworld',
                    "gamecharacter": 'nvs',
                    "gameitem": 'nvs'
                }
        });
			

        }else{
            playSounds('game_over_fail');
            bmp = new  c.Bitmap(main.loadedData.getResult('game_over_bgd2'));
            t1 =   new c.Text(strings.pages.game_over.fail_t1.text, strings.pages.game_over.fail_t1.font, '#912923');
            t1.textAlign = 'center';
            t1.x = 408/2-15;
            t1.lineWidth=408;
            t1.y = 249;

            btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);


             p1 = new c.Bitmap(main.loadedData.getResult('valentino_level_complete_fail'));
            p1.x = 373;
            p1.y = 193;



             p2 = new c.Bitmap(main.loadedData.getResult('victor_level_complete_fail'));
            p2.x = 711;
            p2.y = 220;



             kubel1 = new c.Bitmap(main.loadedData.getResult('kubel1'));
            kubel1.x = 501;
            kubel1.y = 501;


             kubel2 = new c.Bitmap(main.loadedData.getResult('kubel2'));
            kubel2.x = 785;
            kubel2.y = 455;


            setTimeout(addKubly,100)
            TweenLite.from(kubel1,1,{y:680,delay:.7,ease:Bounce.easeOut});
            TweenLite.from(kubel2,1,{y:680,delay:1,ease:Bounce.easeOut});


            TweenLite.from(p1,1,{x:-300});
            TweenLite.from(p2,1,{x:1700});

			
				turner_metadata.trackAction.push({
                   "type": "game", 
                    "data": {
                        "pageName": params.pageName,
                        "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                        "interaction": "gameloss",
                        "gameloss": "1",
                        "gamelevel": nActualLevel,
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
		
        }

        t.addChild(bmp);

        t.addChild(p1);
        t.addChild(p2);


        cont.addChild(t1);
        TweenLite.from(cont,2,{y:-650,ease:Bounce.easeOut});
        t.addChild(cont);



        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 983+btt1.regX;
        btt1.y = 447+btt1.regY;
        t.addChild(btt1);

        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});

    };

    function addKubly(){
        t.addChild(kubel1);
        t.addChild(kubel2);
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

    window.LevelOver = c.promote(LevelOver, "Container");

}());
