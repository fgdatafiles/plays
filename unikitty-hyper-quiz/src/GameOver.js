
(function()
{
    'use strict';
    var t;
    var bgd;

    var nCurrent;
    var kitti;
    var small_kitti;
    var bubble;
    var bubble_txt;
    var mini_l,anim3;
    var offsetY=20;
    function GameOver() {
        this.Container_constructor();

        this.init();
    }

    var gameover = c.extend(GameOver,c.Container);
    gameover.init = function(){
        t = this;
        nCurrent=1;
        bgd=new c.Bitmap(main.loadedData.getResult('intro_bgd'));
        t.addChild(bgd);
 
        var mode;
        var spriteSheet;
        if(app.points>35000){
            mode=1
               spriteSheet= new c.SpriteSheet(app.animHappy);

        }else if(app.points>15000){
            mode=2;
            spriteSheet= new c.SpriteSheet(app.animHappy);
        }else{
            spriteSheet= new c.SpriteSheet(app.animHappy);
            mode =3;
        }
        
        var cc = new c.Container();
        cc.x = 345;
        t.addChild(cc);
        bgd=new c.Bitmap(main.loadedData.getResult('gameover_'+mode));
        cc.addChild(bgd);


        bgd=new c.Bitmap(main.loadedData.getResult('gameover_unikitty'));
        cc.addChild(bgd);
        bgd.x = 145;
        bgd.y = 37;

      
        kitti=new c.Bitmap(main.loadedData.getResult('gameover_unikitty_big'));
        t.addChild(kitti);
        kitti.x=43;
        kitti.y=286;
        t.addChild(kitti);
        TweenLite.from(kitti,1,{x:-300,delay:.5});
        bubble=new c.Container();

        t.addChild(bubble);


        bgd = new c.Bitmap(main.loadedData.getResult('gameover_bubble'));
        bubble.addChild(bgd);
        bubble.x=65;
        bubble.regY = bgd.image.height;
        bubble.y =30+bubble.regY;
        var data = globals.strings.pages.global.title;

        bubble_txt  = new c.Text(data.text, data.font,'#0449C3');
        bubble_txt.textBaseline = 'alphabetic';

        var l = data.font;
        l =l.substr(0,l.indexOf('px'));
        bubble_txt.lineWidth = 340;
        bubble_txt.lineHeight=30;
        bubble_txt.textAlign='center';
        bubble_txt.x = 192+data.x;

        bubble_txt.y = ((bgd.image.height/2)-(bubble_txt.getMeasuredHeight ()/2))-(l/10);
        TweenLite.from(bubble,1,{alpha:0,scaleX:0,scaleY:0,delay:1.5});


        bubble.addChild(bubble_txt);

        mini_l=new c.Bitmap(main.loadedData.getResult('mini_logo'));
        t.addChild(mini_l);
        mini_l.x=404;
        mini_l.y=509;
        if(app.isMore){
            var more = new FrameBtt(main.loadedData.getResult('big_btt_off'),main.loadedData.getResult('big_btt_on'),globals.strings.pages.global.more_button);
            cc.addChild(more);
            more.x = 153;
            more.y= 427;
            
            offsetY=0;
        }



        var again = new FrameBtt(main.loadedData.getResult('big_btt_off'),main.loadedData.getResult('big_btt_on'),globals.strings.pages.global.play_again);
        cc.addChild(again);
        again.x = 153;
        again.y= 357+offsetY;
		again.addEventListener('click',onAgain);
        var d = globals.strings.pages.global['headline'+mode+'_1'];

        var t1  = new c.Text(  d.text,  d.font,'#000');
        var l = t1.font;
        l =l.substr(0,l.indexOf('px'));
        t1.textAlign= 'center';
        t1.lineWidth = 679;
        t1.x =d.x+t1.lineWidth/2+20;
        t1.y =39+d.y+getoffset(t1.font)-(l/10);
        t1.textBaseline = 'alphabetic';
        cc.addChild(t1);


         d = globals.strings.pages.global['headline'+mode+'_2'];

         t1  = new c.Text(  d.text,  d.font,'#000');
         l = t1.font;
        l =l.substr(0,l.indexOf('px'));
        t1.textAlign= 'center';
        t1.lineWidth = 679;
        t1.x =d.x+t1.lineWidth/2+20;
        t1.y =86+d.y+getoffset(t1.font)-(l/10);
        t1.textBaseline = 'alphabetic';
        cc.addChild(t1);

         d = globals.strings.pages.global['description'];

        t1  = new c.Text(  d.text,  d.font,'#000');
         l = t1.font;
        l =l.substr(0,l.indexOf('px'));
        t1.textAlign= 'center';
        t1.lineWidth = 679;
        t1.x =d.x+t1.lineWidth/2+20;
        t1.y =295+ d.y+getoffset(t1.font)-(l/10);
        t1.textBaseline = 'alphabetic';
        cc.addChild(t1);
        //secondAnim();
        TweenLite.from(cc,1,{delay:1,x:1050,ease:Power1.easeOut});
        TweenLite.from(mini_l,1,{y:620,delay:1.5,ease:Power2.easeOut})
        playSounds('wysuwanie');


        anim3= new c.Sprite(spriteSheet);
        anim3.x=-150;
        anim3.y=100;
        t.addChildAt(anim3,1);
        setTimeout(function(){
            anim3.gotoAndPlay('anim');
        },2000)

    };

    function onAgain(){
        window.location.reload(true);

    }



    window.GameOver = c.promote(GameOver, "Container");

}());
