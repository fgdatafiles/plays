
(function()
{
    'use strict';
    var t;
    var bmp,intro_logo,p1,p2,dymek,btt1,t1,t2,t3,t4,t5,btt2;
    function GameOver()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(GameOver, c.Container);
    p.initialize=function() {
        playSounds('game_over')
        backBtt.visible= true;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_over_bgd'));
        t.addChild(bmp);

        var cont = new c.Container();
        cont.x = 585;
        cont.y = 86;
       var bmp1 = new c.Bitmap(main.loadedData.getResult('game_over_appla'));
        cont.addChild(bmp1);

        t1 =   new c.Text(strings.pages.game_over.t1.text, strings.pages.game_over.t1.font, '#FFA147');
        t1.textAlign = 'center';
        t1.x = 478/2+strings.pages.game_over.t1.x;
        t1.lineWidth=478;
        t1.y = 53+strings.pages.game_over.t1.y;

            t2 =   new c.Text(strings.pages.game_over.t2.text, strings.pages.game_over.t2.font, '#FFECBF');
        t2.textAlign = 'center';
        t2.x = 478/2+strings.pages.game_over.t2.x;
        t2.lineWidth=478;
        t2.y = 122+strings.pages.game_over.t2.y;


        t3 =   new c.Text(customers_happy, strings.pages.game_over.t3.font, '#FF5137');

        t3.textAlign = 'center';
        t3.x = 478/2;
        t3.lineWidth=478;
        t3.y = 150;

        t4 =   new c.Text(strings.pages.game_over.t4.text, strings.pages.game_over.t4.font, '#FFECBF');
        t4.textAlign = 'center';
        t4.x = 478/2+strings.pages.game_over.t4.x;
        t4.lineWidth=478;
        t4.y = 240+strings.pages.game_over.t4.y;

        t5 =   new c.Text(points_number.toString(), strings.pages.game_over.t5.font, '#FF5137');
        t5.textAlign = 'center';
        t5.x = 478/2+strings.pages.game_over.t5.x;
        t5.lineWidth=478;
        t5.y = 264+strings.pages.game_over.t5.y;

        
        cont.addChild(t2,t3,t4,t5);

        t.addChild(bmp);

        cont.addChild(t1);
        TweenLite.from(cont,2,{y:-650,ease:Bounce.easeOut});
        t.addChild(cont);



        var p1 = new c.Bitmap(main.loadedData.getResult('game_over_left'));
        p1.x = 300;
        p1.y = 234;
        t.addChild(p1);
        TweenLite.from(p1,1,{x:-400,ease:Strong.easeOut});
         p1 = new c.Bitmap(main.loadedData.getResult('game_over_right'));
        p1.x = 958;
        p1.y = 224;
        t.addChild(p1);

        TweenLite.from(p1,1,{x:1640,ease:Strong.easeOut,delay:.7});


        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.regX = intro_logo.image.width/2;
        intro_logo.regY = intro_logo.image.height/2;
        intro_logo.scaleX = intro_logo.scaleY = 0.77;

        intro_logo.x = 821;
        intro_logo.y = 75;
        t.addChild(intro_logo);
        TweenLite.from(intro_logo,2,{y:-200,ease:Power4.easeOut});

        intro_logo=new c.Bitmap(main.loadedData.getResult('game5_logo'));

        intro_logo.x = 340;
        intro_logo.y = 76;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{delay:1,y:-200,ease:Power4.easeOut});

        var logo_cn = new  c. Bitmap(main.loadedData.getResult('logo_cn'));
        logo_cn.x = 308;
        logo_cn.y = 532;
        t.addChild(logo_cn);
        TweenLite.from(logo_cn,2,{y:700,delay:1.2,ease:Power4.easeOut});

/*
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 726+btt1.regX;
        btt1.y = 456+btt1.regY;
        t.addChild(btt1);
 TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
 */
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.play_again,Step1);
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 626+btt1.regX;
        btt1.y = 446+btt1.regY;
        t.addChild(btt1);

        btt2 = new  FrameBtt(main.loadedData.getResult('btt_bgd'),main.loadedData.getResult('btt_bgd_on'),'#000',strings.pages.game_over.continue);
        btt2.regX = 188/2;
        btt2.regY = 182/2;
        btt2.x = 826+btt2.regX;
        btt2.y = 446+btt2.regY;
        t.addChild(btt2);

        //btt1.scaleX = btt1.scaleY = btt2.scaleY=btt2.scaleX = 0.7
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        TweenLite.from(btt2,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random()});
        btt2.addEventListener('click',onHome);

		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "gamewin",
                "minigametitle":'taco time',
                "gamewin": "1",
                "gamelevel": "2",
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
                    "gametitle": "victor and valentino",
                    "minigametitle":'taco time',
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
                    "gametitle": "victor and valentino",
                    "minigametitle":'taco time',
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
