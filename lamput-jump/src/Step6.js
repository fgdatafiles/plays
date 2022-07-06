
(function()
{
    'use strict';
    var t;
    var bgd;
    var t1,t2,t3,t4;
    var bestVal,totalscore;

    function Step6()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step6, c.Container);
    p.initialize=function() {



        totalscore = level1Points;

        bestVal=parseInt(readLocalStorageObject('lamput_game2_points'));
        console.log(bestVal+'bestVal')

        if(isNaN(bestVal)){
            bestVal=totalscore;
            console.log('is NaN')
            createLocalStorageObject('lamput_game2_points',bestVal)
        }else{


            if(bestVal<totalscore){
                bestVal=totalscore;
                createLocalStorageObject('lamput_game2_points',bestVal)
            }

        }



        playSounds('sGameover');



        bgd=new c.Bitmap(main.loadedData.getResult('go_bgd'));
        t.addChild(bgd);



        var p1=new c.Bitmap(main.loadedData.getResult('go_p1'));
        t.addChild(p1);





        p1.regX = p1.image.width/2
        p1.regY = p1.image.height;
        p1.x = 35+p1.regX;
        p1.y = 26+p1.regY;
        t.addChild(p1);
        TweenLite.from(p1,.5,{y:2100,delay:1});
        TweenMax.to(p1,1,{scaleX:0.95,scaleY:1.05,repeat:-1,yoyo:true, ease:Power4.easeInOut,delay:2});
        var textContainer = new c.Container();
        t.addChild(textContainer)
        var appla=new c.Bitmap(main.loadedData.getResult('go_appla'));
        textContainer.addChild(appla);
        appla.x = 46;
        appla.y = 431;
        TweenLite.from(textContainer,.5,{y:2100});






        var logo=new c.Bitmap(main.loadedData.getResult('logo2'));
        logo.regX = logo.image.width/2;
        logo.regY = logo.image.height/2;
        logo.scaleX = logo.scaleY =0.8;
        logo.x = 768/2;
        logo.y=1091;
        t.addChild(logo);
        TweenLite.from(logo,1,{y:1390})


        t1  = new c.Text(globals.strings.pages.gameover.title.text, globals.strings.pages.gameover.title.font,'#415563');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 768;

        t1.textAlign='center';
        t1.x = 768/2+globals.strings.pages.gameover.title.x;
        t1.y = 546+globals.strings.pages.gameover.title.y;

        textContainer.addChild(t1);

        // HEIGHT
        t4  = new c.Text(globals.strings.pages.gameover.your_score.text, globals.strings.pages.gameover.your_score.font,'#6F898F');
        t4.lineWidth = 768;
        t4.textBaseline = 'alphabetic';

        t4.textAlign='center';
        t4.x = 768/2+globals.strings.pages.gameover.your_score.x;
        t4.y = 611+globals.strings.pages.gameover.your_score.y;

        textContainer.addChild(t4);




        t3  = new c.Text(addSeparatorToNumber(level1Points), globals.strings.pages.gameover.points.font,'#FF8500');
        t3.lineWidth = 768;
        t3.textBaseline = 'alphabetic';

        t3.textAlign='center';
        t3.x = 768/2+globals.strings.pages.gameover.points.x;
        t3.y = 810+globals.strings.pages.gameover.points.y;

        textContainer.addChild(t3);



        t2 =   new c.Text(globals.strings.pages.gameover.best_score.text, globals.strings.pages.gameover.best_score.font, '#8793A7');
        t2.textAlign = 'center';
        t2.x = 768/2+globals.strings.pages.gameover.best_score.x;
        t2.lineWidth=1640;
        t2.y = 877+globals.strings.pages.gameover.best_score.y;
        textContainer.addChild(t2);

        t3 =   new c.Text(bestVal, globals.strings.pages.gameover.best_score.font, '#FF8500');

        t3.x = 440;
        t3.y = 877+globals.strings.pages.gameover.best_score.y;
        textContainer.addChild(t3);

        var again = new FrameBtt(main.loadedData.getResult('btt_again'),globals.strings.pages.gameover.playagain.text,main.loadedData.getResult('btt_again_on'),'#ffffff',globals.strings.pages.gameover.playagain,Step3);
        t.addChild(again);
        again.x = 80;
        again.y= 1180;
        //again.addEventListener('click',onAgain);
        TweenLite.from(again,0.5,{y:1600,delay:.3});

    };



    function onAgain(){
        console.log('send onAgain  Step3 from Step6');
        window.location.href='./index.html';

    }

    window.Step6 = c.promote(Step6, "Container");

}());