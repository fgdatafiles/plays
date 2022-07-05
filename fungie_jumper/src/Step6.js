
(function()
{
    'use strict';
    var t;
    var bgd;
    var t1,t2,t3,t4;
    var totalPoints;

    function Step6()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step6, c.Container);
    p.initialize=function() {

        playSounds('sGameover');



        bgd=new c.Bitmap(main.loadedData.getResult('go_bgd'));
        t.addChild(bgd);

            var fredzle=new c.Bitmap(main.loadedData.getResult('fredzle'));
        t.addChild(fredzle);
        fredzle.regX = fredzle.image.width/2;
        fredzle.regY = fredzle.image.height/2;
        fredzle.x = fredzle.regX;
        fredzle.y = fredzle.regY;

        TweenLite.from(fredzle,1,{scaleX:2,scaleY:2})


        var balloon=new c.Bitmap(main.loadedData.getResult('balloons'));

       balloon.y = -2000;
       balloon.x = 34;

        TweenLite.from(balloon,7,{y:2000})




        var appla=new c.Bitmap(main.loadedData.getResult('go_p1'));
        t.addChild(appla);
        appla.x = 133;
        appla.y = 810;
        TweenLite.from(appla,.5,{y:1600});


        var logo=new c.Bitmap(main.loadedData.getResult('logo2'));
        logo.regX = logo.image.width/2;
        logo.regY = logo.image.height/2;
        logo.scaleX = logo.scaleY =0.6;
        logo.x = 768/2;
        logo.y=74;
        t.addChild(logo);
        TweenLite.from(logo,1,{y:-120})


        t1  = new c.Text(globals.strings.pages.gameover.title.text, globals.strings.pages.gameover.title.font,'#9137B7');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 768;

        t1.textAlign='center';
        t1.x = 768/2+globals.strings.pages.gameover.title.x;
        t1.y = 186+globals.strings.pages.gameover.title.y;

        t.addChild(t1);

        // HEIGHT
        t4  = new c.Text(globals.strings.pages.gameover.total_score.text, globals.strings.pages.gameover.total_score.font,'#B82F27');
        t4.lineWidth = 768;
        t4.textBaseline = 'alphabetic';

        t4.textAlign='center';
        t4.x = 768/2+globals.strings.pages.gameover.total_score.x;
        t4.y = 362+globals.strings.pages.gameover.total_score.y;

        t.addChild(t4);

        totalPoints = 0;
        for( var i=1;i<game.points.length;i++){
            totalPoints += game.points[i];
        }

        t3  = new c.Text(addSeparatorToNumber(totalPoints), globals.strings.pages.nextlevel.points.font,'#B82F27');
        t3.lineWidth = 768;
        t3.textBaseline = 'alphabetic';

        t3.textAlign='center';
        t3.x = 768/2+globals.strings.pages.nextlevel.points.x;
        t3.y = 503+globals.strings.pages.nextlevel.points.y;

        t.addChild(t3);



        var again = new FrameBtt(main.loadedData.getResult('btt_again'),globals.strings.pages.gameover.playagain.text,main.loadedData.getResult('btt_again_on'),'#ffffff',globals.strings.pages.gameover.playagain,Step3);
        t.addChild(again);
        again.x = 140;
        again.y= 583;
        //again.addEventListener('click',onAgain);
        TweenLite.from(again,0.5,{y:1600,delay:.3});
        t.addChild(balloon);
    };



    function onAgain(){
        console.log('send onAgain  Step3 from Step6');
        window.location.href='./index.html';
      //  t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step6 = c.promote(Step6, "Container");

}());