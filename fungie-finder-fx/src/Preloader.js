(function() {

    'use strict';
    var t;
    var bgd, pre_bgd, preloadTime, maska;

    function Preloader(_manifest) {

        this.Container_constructor();
        this.manifest = _manifest;
        t = this;
        this.initialize();
    }
    var p = c.extend(Preloader, c.Container);

    p.initialize = function() {


        if (!c.Sound.initializeDefaultPlugins()) {
            return;
        }


        var sounds = [

            {
                id: 'empty',
                src: 'sounds/empty.mp3'
            },
            {
                id: 'fail1',
                src: 'sounds/fail1.mp3'
            },
            {
                id: 'fail2',
                src: 'sounds/fail2.mp3'
            },
            {
                id: 'fail3',
                src: 'sounds/fail3.mp3'
            },
            {
                id: 'fail4',
                src: 'sounds/fail4.mp3'
            },
            {
                id: 'fail5',
                src: 'sounds/fail5.mp3'
            },
            {
                id: 'fail6',
                src: 'sounds/fail6.mp3'
            },
            {
                id: 'show1',
                src: 'sounds/show1.mp3'
            },
            {
                id: 'show2',
                src: 'sounds/show2.mp3'
            },


            {
                id: 'fail7',
                src: 'sounds/fail7.mp3'
            },
            {
                id: 'click1',
                src: 'sounds/click1.mp3'
            },
            {
                id: 'click2',
                src: 'sounds/click2.mp3'
            },
            {
                id: 'click3',
                src: 'sounds/click3.mp3'
            },
            {
                id: 'music',
                src: 'sounds/music.mp3'
            },
            {
                id: 'game_over',
                src: 'sounds/game_over.mp3'
            },

            {
                id: 'htp',
                src: 'sounds/htp.mp3'
            },
            {
                id: 'game_over_fail',
                src: 'sounds/game_over_fail.mp3'
            },


            {
                id: 'correct1',
                src: 'sounds/correct1.mp3'
            },
            {
                id: 'correct2',
                src: 'sounds/correct2.mp3'
            },
            {
                id: 'correct3',
                src: 'sounds/correct3.mp3'
            },
            {
                id: 'correct4',
                src: 'sounds/correct4.mp3'
            },
            {
                id: 'correct5',
                src: 'sounds/correct5.mp3'
            },
            {
                id: 'correct6',
                src: 'sounds/correct6.mp3'
            },
            {
                id: 'htp',
                src: 'sounds/htp.mp3'
            },
            {
                id: 'level_complete',
                src: 'sounds/level_complete.mp3'
            }



        ];

        var bgd = new c.Bitmap('img/start_bgd.jpg');
        t.addChild(bgd);

        pre_bgd = new createjs.Bitmap('img/preloader/pre_bgd.png');
        pre_bgd.x = (1640 / 2) - 255 / 2;
        pre_bgd.y = 680 / 2 - 210 / 2;
        t.addChild(pre_bgd);

        maska = new createjs.Shape(new createjs.Graphics().beginFill('#e23d39').drawRect(0, 0, 223, 13));
        maska.x = pre_bgd.x + 16;
        maska.y = pre_bgd.y + 194;
        maska.scaleX = 0;
        t.addChild(maska)


        c.Sound.registerSounds(sounds);
        t.queue = new c.LoadQueue(false);
        t.queue.installPlugin(c.Sound);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);


        setTimeout(function() {

            t.queue.loadManifest(t.manifest, true);
            preloadTime = getTime();

        }, 1000)


    }

    function onProgress(e) {
        maska.scaleX = e.loaded;
    }



    function onComplete(e) {

        preloadTime = ((getTime() - preloadTime) / 1000).toFixed(1);
        var arr = preloadTime.split('.');
        preloadTime = arr.join(':');
        console.log(preloadTime);
        turner_metadata.trackAction.push({
            "type": "game",
            "data": {
                "pageName": params.pageName,
                "cid": params.cid,
                "gamersid": "turnerintgamevictorvalentino",
                "interaction": "game load",
                "gameloadduration": preloadTime,
                "gamelaunch": "1",
                "gametitle": "victor and valentino",
                "minigametitle": 'creature catcher',
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

        clear();
    }

    function disp() {

        clear();
    }

    function clear() {
        t.dispatchEvent('completed');

        while (t.numChildren) {
            if (typeof t.getChildAt(0).removeAllChildren === 'function') {
                t.getChildAt(0).removeAllChildren();
            }
            t.removeChildAt(0);
        }
        if (t.parent) {
            t.parent.removeChild(t);
        }
    }
    window.Preloader = c.promote(Preloader, "Container");

}());