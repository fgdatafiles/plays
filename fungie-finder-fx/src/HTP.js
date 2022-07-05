(function() {
    'use strict';
    var t;
    var bmp, intro_logo, btt1, icon, p1, p2, t1, t2, t3;

    function Htp() {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Htp, c.Container);
    p.initialize = function() {

        playSounds('htp');
        bmp = new c.Bitmap(main.loadedData.getResult('htp_bgd'));
        t.addChild(bmp);


        intro_logo = new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 730;
        intro_logo.y = 117;
        intro_logo.scaleX = intro_logo.scaleY = 0.61;


        TweenLite.from(intro_logo, 2, {
            y: -200,
            ease: Strong.easeOut,
            delay: .5
        });

        btt1 = new FrameBtt(main.loadedData.getResult('btt_bgd'), main.loadedData.getResult('btt_bgd_on'), '#FFFF00', strings.pages.intro.play);
        btt1.regX = 327 / 2;
        btt1.regY = 71 / 2;
        btt1.x = 655 + btt1.regX;
        btt1.y = 540 + btt1.regY;


        var textC = new c.Container();
        bmp = new c.Bitmap(main.loadedData.getResult('htp_bgd_title'));
        textC.addChild(bmp);
        var t1 = new c.Text(strings.pages.htp.title.text, strings.pages.htp.title.font, '#633D1F');
        t1.textAlign = 'center';
        t1.lineWidth = 1640 / 2;
        t1.x = 1640 / 2 + strings.pages.htp.title.x;
        t1.y = 36 + strings.pages.htp.title.y;
        t.addChild(textC);
        textC.addChild(t1);

        t1 = new c.Text(strings.pages.htp.t1.text, strings.pages.htp.t1.font, '#fff');
        t1.textAlign = 'center';
        t1.lineWidth = 288;
        t1.x = 378 + t1.lineWidth / 2 + strings.pages.htp.t1.x;
        t1.y = 178 + strings.pages.htp.t1.y;
        t.addChild(textC);
        textC.addChild(t1);


        t1 = new c.Text(strings.pages.htp.t2.text, strings.pages.htp.t2.font, '#fff');
        t1.textAlign = 'center';
        t1.x = 1107 + t1.lineWidth / 2 + strings.pages.htp.t2.x;
        t1.lineWidth = 320;
        t1.y = 178 + strings.pages.htp.t2.y;
        t.addChild(textC);
        textC.addChild(t1);





        p1 = new c.Bitmap(main.loadedData.getResult('htp1'));
        textC.addChildAt(p1, 0);
        p1.x = 399;


        p2 = new c.Bitmap(main.loadedData.getResult('htp2'));
        textC.addChildAt(p2, 0);
        p2.x = 833;

        t.addChild(btt1);

        t.addChild(intro_logo);
        TweenLite.from(btt1, 1, {
            scale: 0,
            ease: Elastic.easeOut,
            delay: 1 + Math.random(),
            onComplete: wlaczBtt
        });
        for (var i = 0; i < textC.numChildren; i++) {
            TweenLite.from(textC.getChildAt(i), 1, {
                delay: 2 + i * .2,
                alpha: 0
            });
        }

    };

    function wlaczBtt() {

        btt1.addEventListener('click', onDispatch);
    }

    function onDispatch() {


        c.Sound.play('music', {
            loop: -1
        });
        t.mouseEnabled = false;
        t.dispatchEvent({
            param: Level1,
            type: 'changePage',
            bubbles: true,
            cancelable: true
        });
    }

    window.Htp = c.promote(Htp, "Container");


}());