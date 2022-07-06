
(function()
{
    'use strict';
    var t;
    var bgd;
    var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
    var height,totalPoints;
    var textfield,best_total;
    var zmniejszanieInterval;
    var orgBest;
    var Step6=function()
    {
        t = this;
        this.initialize();

    };
    var p=Step6.prototype=new c.Container();
    p.initialize=function() {

        main.soundBtt.visible = true;
        main.soundBtt.y= 0;
        playSounds('sGameover');



        bgd=new c.Bitmap(main.loadedData.getResult('gameover_bgd'));
        t.addChild(bgd);
        var appla=new c.Bitmap(main.loadedData.getResult('go_appla'));
        t.addChild(appla);
        appla.x = 49;
        appla.y = 32
        TweenLite.from(appla,.5,{y:-500});



        totalPoints = main.points+main.height;
        var zz;


        var height = readCookie('CloudyWithAChanceOfMeatballs2_Height');
        if(height==null||height=='undefined'){
                height=main.height;

        }else if(height<main.height){
            height=main.height;
        }

        //addBestPointAppla();
        orgBest = null;
        createCookie('CloudyWithAChanceOfMeatballs2_Height',height,100);
        orgBest= readCookie('CloudyWithAChanceOfMeatballs2_BestTotal');


        console.log(orgBest+' ORG BEST');
        console.log(totalPoints+' totalPoints');


        if(orgBest==null||orgBest=='undefined') {

            orgBest = 0;
            textfield = globals.strings.pages.gameover.h3;
        }
//            addBestPointAppla();
        if(orgBest<totalPoints){
            createCookie('CloudyWithAChanceOfMeatballs2_BestTotal',totalPoints,100);
            console.log('zapisuje totalPoints jako org best w nastepnej grze');
            //best_total=totalPoints;
            //orgBest= best_total;
            textfield= globals.strings.pages.gameover.h3;

        }else if(totalPoints<2000){

            textfield= globals.strings.pages.gameover.h1;

        }else{
            textfield= globals.strings.pages.gameover.h2;
        }







        t1  = new c.Text(globals.strings.pages.gameover.title.text, globals.strings.pages.gameover.title.font,'#00CBFF');
        t1.textBaseline = 'alphabetic';
        t1.lineWidth = 574;
        t1.lineHeight=50;
        t1.textAlign='center';
        t1.x = 574/2+globals.strings.pages.gameover.title.x;
        t1.y = 272+globals.strings.pages.gameover.title.y+getoffset(t1.font);

        t.addChild(t1);

        // HEIGHT
        t2  = new c.Text(globals.strings.pages.gameover.height.text, globals.strings.pages.gameover.height.font,'#009999');
        t2.lineWidth = 574/2;
        t2.lineHeight=50;
        t2.textBaseline = 'alphabetic';
        t2.textAlign='center';
        t2.x = 574/2+globals.strings.pages.gameover.height.x;
        t2.y = 342+globals.strings.pages.gameover.height.y+getoffset(t2.font);

        t.addChild(t2);

        t3  = new c.Text(globals.strings.pages.gameover.score.text, globals.strings.pages.gameover.score.font,'#009999');
        t3.lineWidth = 574/2;
        t3.textBaseline = 'alphabetic';
        t3.lineHeight=50;
        t3.textAlign='center';
        t3.x = 574/2+globals.strings.pages.gameover.score.x;
        t3.y = 446+globals.strings.pages.gameover.score.y+getoffset(t3.font);

        t.addChild(t3);

        t4  = new c.Text(textfield.text, textfield.font,'#fff');
        t4.lineWidth = 574/2;
        t4.textBaseline = 'alphabetic';
        t4.lineHeight=50;
        t4.textAlign='center';
        t4.x = 574/2+globals.strings.pages.gameover.score.x;
        t4.y = 637+globals.strings.pages.gameover.score.y+getoffset(t4.font);

//        t.addChild(t4);

        t5  = new c.Text(globals.strings.pages.gameover.total.text+" 0", globals.strings.pages.gameover.total.font,'#EC9541');
        t5.lineWidth = 574/2;
        t5.textBaseline = 'alphabetic';
        t5.lineHeight=50;
        t5.textAlign='center';
        t5.x = 574/2+globals.strings.pages.gameover.total.x;
        t5.y = 579+globals.strings.pages.gameover.total.y+getoffset(t5.font);

        t.addChild(t5);

        t6  = new c.Text(globals.strings.pages.gameover.best_score.text+" "+orgBest, globals.strings.pages.gameover.best_score.font,'#FFCB00');
        t6.lineWidth = 574  ;
        t6.textBaseline = 'alphabetic';
        t6.lineHeight=50;
        t6.textAlign='center';
        t6.x = 574/2+globals.strings.pages.gameover.best_score.x;
        t6.y = 698+globals.strings.pages.gameover.best_score.y+getoffset(t6.font);

        t.addChild(t6);


        t7  = new c.Text(main.height, globals.strings.pages.gameover.points.font,'#FFD2B3');
        t7.lineWidth = 574  ;
        t7.textBaseline = 'alphabetic';
        t7.lineHeight=50;
        t7.textAlign='center';
        t7.x = 574/2+globals.strings.pages.gameover.best_score.x;
        t7.y = 380+globals.strings.pages.gameover.best_score.y+getoffset(t7.font);
        t.addChild(t7);


        t8  = new c.Text(main.points, globals.strings.pages.gameover.points.font,'#FFD2B3');
        t8.lineWidth = 574  ;
        t8.textBaseline = 'alphabetic';
        t8.lineHeight=50;
        t8.textAlign='center';
        t8.x = 574/2+globals.strings.pages.gameover.points.x;
        t8.y = 484+globals.strings.pages.gameover.points.y+getoffset(t8.font);
        t.addChild(t8);

        var again = new FrameBtt(main.loadedData.getResult('btt_again'),globals.strings.pages.gameover.playagain.text,main.loadedData.getResult('btt_again_on'),'#ffffff',globals.strings.pages.gameover.playagain);
        t.addChild(again);
        again.x = 183;
        again.y= 755;
        again.addEventListener('click',onAgain);
        TweenLite.from(again,0.5,{y:-300,delay:.3,onComplete:showRanking});

    };


    function addBestPointAppla(){

        console.log('dodaje apple best points');
        var ccc = new c.Container();


        t.addChild(ccc);
        bgd=new c.Bitmap(main.loadedData.getResult('record'));
        ccc.regX = bgd.image.width/2;
        ccc.regY = bgd.image.height/2;
        ccc.addChild(bgd);
        ccc.x = 411+ccc.regX;
        ccc.y = 602+ccc.regY;
        t3  = new c.Text(globals.strings.pages.gameover.new_record.text, globals.strings.pages.gameover.new_record.font,'#fff');
        t3.textBaseline = 'alphabetic';
        t3.lineWidth=101;
        t3.lineHeight=25;
        t3.textAlign='center';
        t3.x = 50+globals.strings.pages.gameover.new_record.x;
        t3.y = 21+globals.strings.pages.gameover.new_record.y+getoffset(t3.font);
        ccc.addChild(t3)
        TweenLite.from(ccc,1,{scaleX:2,scaleY:2,alpha:0});

    }
    function showRanking(){
        t.addChild(t1,t2,t3,t5,t6,t7,t8);
        setTimeout(addOdliczanie,2000)

    }

    function addOdliczanie(){
        console.log('odliczanie');
        zmniejszanieInterval = setInterval(zmniejsz,40);
    }
    function zmniejsz(e){
        var val1;
        var z = parseInt(t7.text);
        var zz = parseInt(t8.text);
        var texf = parseInt(t5.text.substr(t5.text.indexOf(' ')));
        console.log(texf);
        if(z>=100){
            z-=100;

            texf+=100;
            t5.text = globals.strings.pages.gameover.total.text+" "+texf;
            t7.text=z.toString();

        }else if(z>0){
            //val1+=z;
            texf+=z;
            t5.text = globals.strings.pages.gameover.total.text+" "+texf;
            z=0;
            t7.text='0'
            console.log(z);
        }else if(z=='0'){

            if(zz>=100){
                zz-=100;
                texf+=100;
                t5.text=globals.strings.pages.gameover.total.text+" "+texf;
                t8.text=zz.toString();
            }else if(zz>0){
                texf+=zz;
                t5.text = globals.strings.pages.gameover.total.text+" "+texf;
                zz=0;
                t8.text='0';
            }else{

                console.log(totalPoints+'total Poinst')
                console.log(orgBest+'orgBest')
                    if(totalPoints>orgBest){
                        t6.text=globals.strings.pages.gameover.best_score.text+" "+texf;
                        addBestPointAppla();
                    }

                t.addChild(t4);
                clearInterval(zmniejszanieInterval);
            }

        }






        console.log('zmniejszam')
    }

    function onAgain(){
        t.dispatchEvent({param: Step3, type:'changePage',bubbles:true,cancelable:true});
    }

    window.Step6=Step6;

}());
