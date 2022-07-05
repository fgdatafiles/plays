(function() {
    'use strict';
    var t;
    var bmp, intro_logo, p1, p2, btt1, btt2;

    function GameOver() {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(GameOver, c.Container);
    p.initialize = function() {

        playSounds('game_over');
        bmp = new c.Bitmap(main.loadedData.getResult('game_over'));
        t.addChild(bmp);
        intro_logo = new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 693;
        intro_logo.y = 12;
        t.addChild(intro_logo);
        intro_logo.scaleX = intro_logo.scaleY = 0.88;

        TweenLite.from(intro_logo, 2, {
            y: -200,
            ease: Strong.easeOut,
            delay: .5
        });


        var t1 = new c.Text(strings.pages.game_over.success.text, strings.pages.game_over.success.font, '#643d20');
        t1.textAlign = 'center';
        t1.x = 1640 / 2 + strings.pages.game_over.success.x;
        t1.lineWidth = 1640;
        t1.y = 136 + strings.pages.game_over.success.y;
        t.addChild(t1);

        t1 = new c.Text(strings.pages.game_over.total_score.text, strings.pages.game_over.total_score.font, '#F85955');
        t1.textAlign = 'center';
        t1.x = 1640 / 2 + strings.pages.game_over.total_score.x;
        t1.lineWidth = 1640;
        t1.y = 172 + strings.pages.game_over.total_score.y;
        t.addChild(t1);
        var points = parseInt(level2Points) + parseInt(level1Points) + parseInt(level4Points) + parseInt(level3Points);

        t1 = new c.Text(points, strings.pages.game_over.points.font, '#F85955');
        t1.textAlign = 'center';
        t1.x = 1640 / 2 + strings.pages.game_over.points.x;
        t1.lineWidth = 1640;
        t1.y = 194 + strings.pages.game_over.points.y;
        t.addChild(t1);



        btt1 = new FrameBtt(main.loadedData.getResult('btt_bgd'), main.loadedData.getResult('btt_bgd_on'), '#FFFF00', strings.pages.game_over.play_again, Step1);
        btt1.regX = 188 / 2;
        btt1.regY = 182 / 2;
        btt1.x = 656 + btt1.regX;
        btt1.y = 541 + btt1.regY;
        t.addChild(btt1);

        var p1 = new c.Bitmap(main.loadedData.getResult('game_over_p1'));
        p1.x = 399;
        p1.y = 277;
        t.addChild(p1);
        TweenLite.from(btt1, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: 1 + Math.random()
        });


        /*
        			turner_metadata.trackAction.push({
                       "type": "game", 
                        "data": {
                            "pageName": params.pageName,
                            "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                            "interaction": "gamewin",
                            "gamewin": "1",
                            "gamelevel": "2",
                            "minigametitle":'creature catcher',
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
                        "minigametitle":'creature catcher',
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
        */
    };

    function onHome() {

        window.location.href = '../index.html?pageName=' + params.pageName + '&cid=' + params.cid;
    }

    function onDispatch() {
        /*
		turner_metadata.trackAction.push({
           "type": "game", 
            "data": {
                "pageName": params.pageName,
                "cid": params.cid, "gamersid" : "turnerintgamevictorvalentino",
                "interaction": "game level",
                "gamelevelreplay": "1",
                "minigametitle":'creature catcher',
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
        */

        t.mouseEnabled = false;
        t.dispatchEvent({
            param: Step1,
            type: 'changePage',
            bubbles: true,
            cancelable: true
        });
    }
    window.GameOver = c.promote(GameOver, "Container");

}());