
(function()
{
    'use strict';
    var t,btt1,btt2;

    var GameOver=function()
    {
       console.log('step7');
        t = this;

        this.initialize();

    };
    var p=GameOver.prototype=new createjs.Container();
    p.initialize=function() {
        
        if(main.sound){
            createjs.Sound.play('end');
        }

        main.points = main.points1+main.points2+main.points3;
        main.best = main.points;
        var dane = readCookie('grizzli_game2');
        if(dane=='undefined'||dane==null){
            createCookie('grizzli_game2',main.points,30);
        }else{
            var data = readCookie('grizzli_game2');

            if(data<main.points){

                main.best=data;
                
            }else{
                createCookie('grizzli_game2',main.points,30);
            }
        }




        setTimeout(function(){t.mouseEnabled = true;},1000);
            main.nCurrentLevel=1;
            var bgd=new createjs.Bitmap(main.loadedData.getResult('go_bgd'));
            t.addChild(bgd);

            var gfx=new createjs.Bitmap(main.loadedData.getResult('over'));
            t.addChild(gfx);
            gfx.x = 550;
            gfx.y = 117;
            TweenLite.from(gfx,1,{ x:1000,delay:1,ease:Strong.easeOut});

            var cc= new createjs.Container();
            this.addChild(cc);
            cc.x= 29;
            cc.y = 24;
            bgd = new createjs.Bitmap(main.loadedData.getResult('rog'));
            cc.addChild(bgd);


            var t1  = new createjs.Text(strings.pages.htp_page.game_title.text, strings.pages.htp_page.game_title.font,'#fff');
            t1.lineWidth=228;
            t1.x = 114+strings.pages.htp_page.game_title.x;
            t1.y = 143+strings.pages.htp_page.game_title.y;
            t1.textBaseline = "alphabetic";
            t1.textAlign='center';
            console.log(main.points1+":"+main.points2+":"+main.points3);

            cc.addChild(t1);

            t1  = new createjs.Text(main.text.text, main.text.font,'#EB008B');
            t1.lineWidth = 944;
            t1.lineHeight=40;
            t1.textAlign='center';
            t1.x = 944/2+main.text.x;
            t1.y = 108+main.text.y;
            t1.textBaseline = "alphabetic";
            this.addChild(t1);

            t1  = new createjs.Text(strings.pages.game_over.your_time.text+' '+main.points, strings.pages.game_over.your_time.font,'#000');
            t1.lineWidth = 944;
            t1.textAlign='center';
            t1.textBaseline = "alphabetic";
            t1.x = 944/2+strings.pages.game_over.your_time.x;
            t1.y = 225+strings.pages.game_over.your_time.y;
            this.addChild(t1);

            //// check your best score


            t1  = new createjs.Text(strings.pages.game_over.best_time.text+' '+main.best, strings.pages.game_over.best_time.font,'#89338D');
            t1.lineWidth = 944;
            t1.textAlign='center';
            t1.x = 944/2+strings.pages.game_over.best_time.x;
            t1.y = 288+strings.pages.game_over.best_time.y;
            t1.textBaseline = "alphabetic";
            this.addChild(t1);


            btt2 = new  FrameBtt(main.loadedData.getResult('btt_small'),main.loadedData.getResult('btt_small_on'),'#ffffff',strings.pages.game_over.next_button,Step1);
            t.addChild(btt2);
            btt2.cursor ='pointer';
            btt2.x=350;
            btt2.y=322;
            btt2.mouseEnabled=true;
            btt2.stateClicked = true;

          
    };
    function wlaczbtt1(){
        btt1.mouseEnabled=true;
    }
    window.GameOver=GameOver;

}());
