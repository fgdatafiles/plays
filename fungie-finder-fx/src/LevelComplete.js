(function() {
    'use strict';
    var t;
    var bmp, t1, className, button, bmpString, btt1, btt_obj;

    function LevelComplete() {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(LevelComplete, c.Container);

    p.initialize = function() {


        var bSuccess = true;
        playSounds('level_complete');
        backBtt.visible = true;
        if (bSuccess) {
            btt_obj = strings.pages.next_level.next_level;

            t1 = strings.pages.next_level.success;
            bmpString = 'game_level_complete_good';

            nCurrentLevel++;
            var param = eval('Level' + nCurrentLevel);
            className = param;

        } else {
            t1 = strings.pages.next_level.failure;
            className = Step1;
            bmpString = 'game_level_complete_bad'

            btt_obj = strings.pages.game_over.play_again;
        }
        bmp = new c.Bitmap(main.loadedData.getResult(bmpString));
        t.addChild(bmp);

        console.log(className);
        var t1 = new c.Text(t1.text, t1.font, '#0F51BF');
        t1.textAlign = 'center';
        t1.x = 545 + 326 / 2;
        t1.lineWidth = 326;
        t1.y = 260;
        t.addChild(t1);

        t1 = new c.Text(strings.pages.next_level.score.text, strings.pages.next_level.score.font, '#FF5F2D');
        t1.textAlign = 'center';
        t1.x = 531 + 342 / 2;
        t1.lineWidth = 342;
        t1.y = 350;
        t.addChild(t1);

        var zz;
        if (nCurrentLevel == 2) {
            zz = level1Points;
        } else if (nCurrentLevel == 3) {
            zz = level2Points;
        } else if (nCurrentLevel == 4) {
            zz = level3Points;
        }
        t1 = new c.Text(zz, strings.pages.next_level.points.font, '#FF5F2D');
        t1.textAlign = 'center';
        t1.x = 537 + 330 / 2;
        t1.lineWidth = 330;
        t1.y = 372;
        t.addChild(t1);

        console.log(className + 'CLASSS NAME');
        btt1 = new FrameBtt(main.loadedData.getResult('btt_bgd'), main.loadedData.getResult('btt_bgd_on'), '#FFFF00', btt_obj, className);
        btt1.regX = 327 / 2;
        btt1.regY = 71 / 2;
        btt1.x = 655 + btt1.regX;
        btt1.y = 540 + btt1.regY;
        t.addChild(btt1);
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
                "gamelevel": "1",
                "minigametitle":'creature catcher',
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
*/
    };

    window.LevelComplete = c.promote(LevelComplete, "Container");

}());