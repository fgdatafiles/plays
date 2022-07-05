(function() {
    'use strict';
    var t;
    var bmp, btt1, btt2, btt3, intro_logo;

    function PauseScreen() {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(PauseScreen, c.Container);
    p.initialize = function() {

        bmp = new c.Bitmap(main.loadedData.getResult('pause_bgd'));
        t.addChild(bmp);
        pauseBtt.visible = false;
        backBtt.visible = false;

        intro_logo = new c.Bitmap(main.loadedData.getResult('logo_game'));
        intro_logo.x = 744;
        intro_logo.y = 23;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo, 2, {
            y: -200,
            ease: Strong.easeOut,
            delay: .5
        });

        for (var i = 0; i < 3; i++) {

            var shadow = new c.Bitmap(main.loadedData.getResult('pause_screen_shadow'));
            t.addChild(shadow);
            shadow.x = 476 + (i * 252);
            shadow.y = 559;


            var glow = new c.Bitmap(main.loadedData.getResult('pause_screen_glow'));
            t.addChild(glow);
            glow.x = 401 + (i * 253);
            glow.y = 171;
        }

        btt1 = new FrameBtt(main.loadedData.getResult('pausescreen_backBtt_off'), main.loadedData.getResult('pausescreen_backBtt_on'));
        btt1.regX = 188 / 2;
        btt1.regY = 182 / 2;
        btt1.x = 478 + btt1.regX;
        btt1.y = 248 + btt1.regY;
        t.addChild(btt1);
        var t1 = new c.Text(strings.pages.game.back.text, strings.pages.game.back.font, '#95EBFD');
        t1.textAlign = 'center';
        t1.x = btt1.x;
        t1.lineWidth = 188;
        t1.y = 448;

        t.addChild(t1);


        btt2 = new FrameBtt(main.loadedData.getResult('play_off'), main.loadedData.getResult('play_on'));
        btt2.regX = 188 / 2;
        btt2.regY = 182 / 2;
        btt2.x = 726 + btt2.regX;
        btt2.y = 248 + btt2.regY;
        t.addChild(btt2);
        t1 = new c.Text(strings.pages.game.continue.text, strings.pages.game.continue.font, '#95EBFD');
        t1.textAlign = 'center';
        t1.x = btt2.x;
        t1.lineWidth = 188;
        t1.y = 448;
        t.addChild(t1);


        btt3 = new FrameBtt(main.loadedData.getResult('pausescreen_restartBtt_off'), main.loadedData.getResult('pausescreen_restartBtt_on'));
        btt3.regX = 188 / 2;
        btt3.regY = 182 / 2;
        btt3.x = 975 + btt3.regX;
        btt3.y = 248 + btt3.regY;
        t.addChild(btt3);
        t1 = new c.Text(strings.pages.game.replay.text, strings.pages.game.replay.font, '#95EBFD');
        t1.textAlign = 'center';
        t1.x = btt3.x;
        t1.lineWidth = 188;
        t1.y = 448;
        t.addChild(t1);

        btt1.addEventListener('click', dispatchBack);
        btt2.addEventListener('click', dispatchResume);
        btt3.addEventListener('click', dispatchReplay);

        TweenLite.from(btt1, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: .1
        });
        TweenLite.from(btt2, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: .2
        });
        TweenLite.from(btt3, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: .3
        });



    };



    function dispatchBack(e) {
        t.destroy();
        t.dispatchEvent({
            type: 'back',
            bubbles: true,
            cancelable: true
        });
    }

    function dispatchResume(e) {
        t.destroy();
        t.dispatchEvent({
            type: 'resume',
            bubbles: true,
            cancelable: true
        });
    }

    function dispatchReplay(e) {
        t.destroy();
        t.dispatchEvent({
            type: 'replay',
            bubbles: true,
            cancelable: true
        });
    }

    p.destroy = function() {
        this.removeAllChildren();
    };

    window.PauseScreen = c.promote(PauseScreen, "Container");
}());