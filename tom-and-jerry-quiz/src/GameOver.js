
(function()
{
    'use strict';
    var t,btt1,btt2,offset;

    var GameOver=function()
    {
       console.log('step7');
        t = this;

        this.initialize();

    };
    var p=GameOver.prototype=new createjs.Container();
    p.initialize=function() {

        if(main.sound){
            createjs.Sound.play('applause');
        }


        var kalka=new createjs.Bitmap(main.loadedData.getResult('gameover_bgd'));
        t.addChild(kalka);

        var wynik=[0,0,0,0,0];
        for (var i=0;i<7;i++){
            switch (main.answers[i]){

                case 1:
                    wynik[1]++;
                    break;
                case 2:
                    wynik[2]++;
                    break;
                case 3:
                    wynik[3]++;
                    break;
                case 4:
                    wynik[4]++;
                    break;
            }
        }

        var hippek = Math.max.apply(null, wynik);
        var wygrany;
        if(wynik[1]==hippek){wygrany=1}else if(wynik[2]==hippek){wygrany=2}else if(wynik[3]==hippek){wygrany=3}else{wygrany=4};

        if(main.sound){
            createjs.Sound.play('applause');
        }

        var container =  new createjs.Container();
        container.y = 0;
        container.x = -1000;
        this.addChild(container);
        var bgd = new createjs.Bitmap(main.loadedData.getResult('yellow'));
        container.addChild(bgd);


        btt1 = new  FrameBtt(main.loadedData.getResult('btt'),main.loadedData.getResult('btt_on'),'#ffffff',strings.pages.game_over.play_again,Step1);

        container.addChild(btt1);
        btt1.cursor ='pointer';
        btt1.x=54;
        btt1.y=454;
        btt1.mouseEnabled=true;
        btt1.stateClicked = true;
        var odpowiedz1 = new Podest(wygrany);
        odpowiedz1.label.visible = false;
        t.addChild(odpowiedz1);
        odpowiedz1.x = 627;
        odpowiedz1.y=326;


        TweenLite.to(container,1,{x:0,ease:Strong.easeOut});

        var t1  = new createjs.Text(strings.pages.game_over.text1.text, strings.pages.game_over.text1.font,'#853995');
        t1.textBaseline = "alphabetic";
        offset = t1.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t1.lineWidth = 500;
        t1.textAlign='left';
        t1.lineHeight=parseInt(strings.pages.game_over.text1.font.substr(0,2));
        t1.x = 51+strings.pages.game_over.text1.x;
        t1.y = 157+strings.pages.game_over.text1.y+offset;
        container.addChild(t1);


        var t2  = new createjs.Text(strings.pages.game_over['winner'+wygrany].text, strings.pages.game_over['winner'+wygrany].font,'#EB008B');
        t2.textBaseline = "alphabetic";
        offset = t2.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t2.lineWidth = 500;

        t2.textAlign='left';
        t2.x = 49+strings.pages.game_over['winner'+wygrany].x;
        t2.y = 231+strings.pages.game_over['winner'+wygrany].y+offset;
        container.addChild(t2);

        var t3  = new createjs.Text(strings.pages.game_over['description'+wygrany].text, strings.pages.game_over['description'+wygrany].font,'#000000');
        t3.textBaseline = "alphabetic";
        offset = t3.font;
        offset = parseInt(offset.substr(0, offset.indexOf('px')));
        t3.lineWidth = 500;
        t3.textAlign='left';
        t3.x = 51+strings.pages.game_over['description'+wygrany].x;
        t3.y = 304+strings.pages.game_over['description'+wygrany].y+offset;
        t3.lineHeight=parseInt(strings.pages.game_over['description'+wygrany].font.substr(0,2));

        container.addChild(t3);

    };

  

    window.GameOver=GameOver;

}());
