(function() {
    'use strict';
    var t;
    var bmp, intro_logo, btt1, logo_game1, p1, p2, logo_cn;

    function Step1() {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step1, c.Container);
    p.initialize = function() {



        bmp = new c.Bitmap(main.loadedData.getResult('start_bgd'));
        t.addChild(bmp);
        TweenLite.from(bmp, 1, {
            alpha: 0
        });

        p1 = new c.Bitmap(main.loadedData.getResult('p1'));
        p1.x = 444;
        p1.y = 255;
        t.addChild(p1);


        backBtt.visible = true;
        btt1 = new FrameBtt(main.loadedData.getResult('btt_bgd'), main.loadedData.getResult('btt_bgd_on'), '#FFFF00', strings.pages.intro.play);
        btt1.regX = 327 / 2;
        btt1.regY = 71 / 2;
        btt1.x = 655 + btt1.regX;
        btt1.y = 540 + btt1.regY;

        t.addChild(btt1);

        logo_game1 = new c.Bitmap(main.loadedData.getResult('logo_game'));
        logo_game1.x = 429;
        logo_game1.y = 128;
        t.addChild(logo_game1);

        intro_logo = new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 693;
        intro_logo.y = 12;
        t.addChild(intro_logo);








        TweenLite.from(logo_game1, 2, {
            y: -400,
            ease: Elastic.easeOut,
            delay: 2
        });
        TweenLite.from(intro_logo, 2, {
            y: -200,
            ease: Elastic.easeOut,
            delay: 2.5
        });
        TweenLite.from(btt1, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: 2 + Math.random(),
            onComplete: wlaczBtt
        });

    };

    function wlaczBtt() {
        btt1.addEventListener('click', animOut);
    }



    function animOut() {
        onDispatch();
        /*
		   turner_metadata.trackAction.push({
              "type": "game", 
               "data": {
                   "pageName": params.pageName,
                   "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                   "interaction": "game start",
                   "gamestart": "1",
                   "minigametitle":'creature catcher',
                   "gametitle": "victor and valentino",
                   "englishname": "victor and valentino",
                   "gamecategory": "arcade",
                   "brand": 'cartoon network',
                   "gamelevel": 'nvs',
                   "gamemilestones": 'nvs',
                   "gamemap": 'nvs',
                   "gamecharacter": 'nvs',
                   "gameitem": 'nvs'
               }
        });
		*/

    }

    function onDispatch() {
        t.mouseEnabled = false;
        t.dispatchEvent({
            param: Htp,
            type: 'changePage',
            bubbles: true,
            cancelable: true
        });
    }


    window.Step1 = c.promote(Step1, "Container");

}());