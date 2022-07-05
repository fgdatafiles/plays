
(function()
{
    'use strict';
    var t;
    var bgd;
    var t1,t2,t3,t4;
    var totalPoints;
    var appla;
    var again;
    function Step5()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    }
    var p = c.extend(Step5, c.Container);
    p.initialize=function() {




        bgd=new c.Bitmap(main.loadedData.getResult('nextlevel_bgd'));
        t.addChild(bgd);


        if(game.points[game.nCurrentLevel]<game.levelLimits[game.nCurrentLevel]){
            playSounds('sGameover2');
            appla  =new c.Bitmap(main.loadedData.getResult('nextlevel_p2'));
            t.addChild(appla);
            appla.x = 20;
            appla.y = 734;
            TweenLite.from(appla,.5,{y:-1600});


            var zz = globals.strings.pages.nextlevel.bad_luck.text.substr(0,globals.strings.pages.nextlevel.bad_luck.text.indexOf('{levelLimit}'));
            var zz2 = globals.strings.pages.nextlevel.bad_luck.text.substr(globals.strings.pages.nextlevel.bad_luck.text.indexOf('{levelLimit}')+13);
            var zz3 = zz+addSeparatorToNumber(game.levelLimits[game.nCurrentLevel])+zz2;
            t1  = new c.Text(zz3, globals.strings.pages.nextlevel.bad_luck.font,'#9137B7');
            t1.textBaseline = 'alphabetic';
            t1.lineWidth = 768;

            t1.textAlign='center';
            t1.x = 768/2+globals.strings.pages.nextlevel.bad_luck.x;
            t1.y = 163+globals.strings.pages.nextlevel.bad_luck.y;

            t.addChild(t1);


            t2  = new c.Text(globals.strings.pages.nextlevel.your_score.text, globals.strings.pages.nextlevel.your_score.font,'#B82F27');
            t2.lineWidth = 768;

            t2.textBaseline = 'alphabetic';
            t2.textAlign='center';
            t2.x = 768/2+globals.strings.pages.nextlevel.your_score.x;
            t2.y = 402+globals.strings.pages.nextlevel.your_score.y;

            t.addChild(t2);

            t3  = new c.Text(addSeparatorToNumber(game.points[game.nCurrentLevel]), globals.strings.pages.nextlevel.points.font,'#B82F27');
            t3.lineWidth = 768;
            t3.textBaseline = 'alphabetic';

            t3.textAlign='center';
            t3.x = 768/2+globals.strings.pages.nextlevel.points.x;
            t3.y = 543+globals.strings.pages.nextlevel.points.y;

            t.addChild(t3);





             again = new FrameBtt(main.loadedData.getResult('btt_again'),globals.strings.pages.nextlevel.playagain.text,main.loadedData.getResult('btt_again_on'),'#ffffff',globals.strings.pages.nextlevel.playagain,Step3);
            t.addChild(again);
            again.x = 140;
            again.y= 583;
//            again.addEventListener('click',onStartAgain);
            TweenLite.from(again,0.5,{y:1600,delay:.3});


        }else{
            playSounds('sGameover1');

             appla=new c.Bitmap(main.loadedData.getResult('nextlevel_p1'));
            t.addChild(appla);
            appla.x = 52;
            appla.y = 759
            TweenLite.from(appla,.5,{y:-1600});
            totalPoints = 0;
            console.log(game.points);
            for( var i=1;i<game.points.length;i++){
                totalPoints += parseInt(game.points[i]);
            }


            var logo=new c.Bitmap(main.loadedData.getResult('logo2'));
            logo.regX = logo.image.width/2;
            logo.regY = logo.image.height/2;
            logo.scaleX = logo.scaleY =0.6;
            logo.x = 768/2;
            logo.y=74;
            t.addChild(logo);
            TweenLite.from(logo,1,{y:-120})


            t1  = new c.Text(globals.strings.pages.nextlevel.level_complete.text, globals.strings.pages.nextlevel.level_complete.font,'#9137B7');
            t1.textBaseline = 'alphabetic';
            t1.lineWidth = 768;

            t1.textAlign='center';
            t1.x = 768/2+globals.strings.pages.nextlevel.level_complete.x;
            t1.y = 186+globals.strings.pages.nextlevel.level_complete.y;

            t.addChild(t1);

            // HEIGHT
            t2  = new c.Text(globals.strings.pages.nextlevel.your_score.text, globals.strings.pages.nextlevel.your_score.font,'#B82F27');
            t2.lineWidth = 768;

            t2.textBaseline = 'alphabetic';
            t2.textAlign='center';
            t2.x = 768/2+globals.strings.pages.nextlevel.your_score.x;
            t2.y = 302+globals.strings.pages.nextlevel.your_score.y;

            t.addChild(t2);

            t3  = new c.Text(addSeparatorToNumber(game.points[game.nCurrentLevel]), globals.strings.pages.nextlevel.points.font,'#B82F27');
            t3.lineWidth = 768;
            t3.textBaseline = 'alphabetic';

            t3.textAlign='center';
            t3.x = 768/2+globals.strings.pages.nextlevel.points.x;
            t3.y = 443+globals.strings.pages.nextlevel.points.y;

            t.addChild(t3);

            t4  = new c.Text(globals.strings.pages.nextlevel.total_score.text+addSeparatorToNumber(totalPoints), globals.strings.pages.nextlevel.total_score.font,'#1887D5');
            t4.lineWidth = 768;
            t4.textBaseline = 'alphabetic';

            t4.textAlign='center';
            t4.x = 768/2+globals.strings.pages.nextlevel.total_score.x;
            t4.y = 500+globals.strings.pages.nextlevel.total_score.y;

            t.addChild(t4);

            again = new FrameBtt(main.loadedData.getResult('btt_again'),globals.strings.pages.nextlevel.play.text,main.loadedData.getResult('btt_again_on'),'#ffffff',globals.strings.pages.nextlevel.play);
            t.addChild(again);
            again.x = 140;
            again.y= 583;
            again.addEventListener('click',onAgain);
            TweenLite.from(again,0.5,{y:1600,delay:.3});
            game.nCurrentLevel++;
        }
    };


    function onStartAgain(){
        window.location.href='./index.html';
    }
    function onAgain(){
        t.dispatchEvent({param: Step4, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step5 = c.promote(Step5, "Container");

}());