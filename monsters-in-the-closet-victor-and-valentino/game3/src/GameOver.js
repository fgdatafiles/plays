
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,dymek,btt1,t1,logo_game1,btt2;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function() {
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_over_bgd'));
        t.addChild(bmp);
        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.scaleX = intro_logo.scaleY = 0.84;
        intro_logo.x = 402;
        intro_logo.y = 23;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game3'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.52;
        logo_game1.x = 1034;
        logo_game1.y = -57;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});

        var prefix = 'success';

        if(nActualLevel==1){
            prefix ='fail';
            playSounds('game_over_fail');
            p2 = new c.Bitmap(main.loadedData.getResult('game_over_valentino2'));
            p1 = new c.Bitmap(main.loadedData.getResult('game_over_victor2'));
			
			
				turner_metadata.trackAction.push({
                   "type": "game", 
                    "data": {
                        "pageName": params.pageName,
                        "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                        "interaction": "gameloss",
                        "gameloss": "1",
                        "gamelevel": "1",
                        "minigametitle":'smash the pinata',
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
					
			

        }else{
            playSounds('game_over');
            p2 = new c.Bitmap(main.loadedData.getResult('game_over_valentino1'));
            p1 = new c.Bitmap(main.loadedData.getResult('game_over_victor1'));

            bmp = new  c.Bitmap(main.loadedData.getResult('game_over_success'));
            bmp.x = 360;
            t.addChildAt(bmp,1);
			
				turner_metadata.trackAction.push({
                   "type": "game", 
                    "data": {
                        "pageName": params.pageName,
                        "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                        "interaction": "gamewin",
                        "gamewin": "1",
                        "gamelevel": "1",
                        "minigametitle":'smash the pinata',
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
                    "minigametitle":'smash the pinata',
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
        }

        t1 =   new c.Text(strings.pages.game_over[prefix+'_t1'].text, strings.pages.game_over[prefix+'_t1'].font, '#371B11');
        t1.textAlign = 'center';
        t1.x = 1640/2;
        t1.lineWidth=1640;
        t1.y = 129;
        t.addChild(t1);


        t1 =   new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#fff');
        t1.textAlign = 'center';
        t1.x = 1640/2;
        t1.lineWidth=1640;
        t1.y = 216;
        t.addChild(t1);



        var zz = parseInt(level1Points)+parseInt(level2Points);
        t1 =   new c.Text(zz, strings.pages.game_over.points.font, '#E93D2F');
        t1.textAlign = 'center';
        t1.x = 1640/2;
        t1.lineWidth=1640;
        t1.y = 240;
        t.addChild(t1);

        t1 =    new c.Text(strings.pages.game_over[prefix+'_t2'].text, strings.pages.game_over[prefix+'_t2'].font, '#fff');
        t1.textAlign = 'center';
        t1.x = 1640/2;
        t1.lineWidth=1640;
        t1.y = 547;
        t.addChild(t1);
        



        t.addChild(p1);
        p1.x = 1010;
        p1.y = 311;

        t.addChild(p2);
        p2.x = 322;
        p2.y = 275;

/*
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 725+btt1.regX;
        btt1.y = 346+btt1.regY;
        t.addChild(btt1);

        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});


*/

        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 625+btt1.regX;
        btt1.y = 346+btt1.regY;
        t.addChild(btt1);




        btt2 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.continue);
        btt2.regX = 188/2;
        btt2.regY = 182/2;
        btt2.x = 825+btt2.regX;
        btt2.y = 346+btt2.regY;
        btt2.addEventListener('click',onHome);
        t.addChild(btt2);

        //btt1.scaleX = btt1.scaleY = btt2.scaleY=btt2.scaleX = 0.7
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        TweenLite.from(btt2,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});

		
		
		

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
                "minigametitle":'smash the pinata',
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
