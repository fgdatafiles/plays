
(function()
{
    'use strict';
    var t;
    var bmp,t1,className,button,bmpString,btt1,btt_obj;
    function LevelComplete()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(LevelComplete, c.Container);

    p.initialize=function() {
        nCurrentLevel=1;


       var  bSuccess = true;
        playSounds('level_complete');
        backBtt.visible= true;

        btt_obj = strings.pages.next_level.next_level;
        t1 =strings.pages.next_level.success;
        nCurrentLevel++;
        bmp = new  c.Bitmap(main.loadedData.getResult('game_level_complete_good'));
        t.addChild(bmp);

        var globe=new c.Bitmap(main.loadedData.getResult('globe'));
        globe.regX = globe.image.width/2;
        globe.regY = globe.image.height/2;
        globe.x = globe.regX;
        globe.y = globe.regY;
        globe.scaleX = globe.scaleY = 0.74;


        TweenLite.to(globe,120,{rotation:360,ease:Linear.easeNone})
        var globeContainer = new c.Container();
        t.addChild(globeContainer);

        globeContainer.addChild(globe)

        globeContainer.x = 516;
        globeContainer.y =-199;
        TweenLite.from(globeContainer,15,{y:-600,ease:Strong.easeOut});


        var blob=new c.Bitmap(main.loadedData.getResult('lc_blob'));
        t.addChild(blob);
        blob.regX = blob.image.width/2;
        blob.regY = blob.image.height/2;
        blob.x = 355+blob.regX;
        blob.y = 355+blob.regY;
        t.addChild(blob);
        TweenMax.from(blob,3,{scaleX:0,scaleY:0,ease:Elastic.easeOut});


        var p1 = new  c.Bitmap(main.loadedData.getResult('lc_p1'));
        t.addChild(p1);
        p1.x = 409;
        p1.y =147;
        TweenMax.from(p1,3,{x:-600,delay:2,ease:Power4.easeOut});


        var zz=level1Points;

        var left = new c.Container();
        left.x = 646;
        left.y= 37;
        t.addChild(left);
        TweenMax.from(left,3,{delay:1,x:1800,ease:Power4.easeOut})
        bmp=new c.Bitmap(main.loadedData.getResult('lc_appla'));
        left.addChild(bmp)


        var t1 =   new c.Text(t1.text, t1.font, '#87C10F');
        t1.textAlign = 'center';
        t1.x =646/2;
        t1.lineWidth=646;
        t1.y = 35;
        left.addChild(t1);

      t1 =strings.pages.next_level.level_complete;
       t1 =   new c.Text(t1.text, t1.font, '#43C7E7');
      t1.textAlign = 'center';
      t1.x = 646/2;
      t1.lineWidth=646;
      t1.y = 89;
      left.addChild(t1);




     t1 =   new c.Text(strings.pages.next_level.score.text, strings.pages.next_level.score.font, '#fff');
        t1.textAlign = 'center';
        t1.x = 646/2;
        t1.lineWidth=646;
        t1.y = 227;
        left.addChild(t1);

        t1 =   new c.Text(zz, strings.pages.next_level.points.font, '#BF0609');
        t1.textAlign = 'center';
        t1.x = 646/2;
        t1.lineWidth=646;
        t1.y = 258;
        left.addChild(t1);

        console.log(className+'CLASSS NAME');
        btt1 = new  FrameBtt(main.loadedData.getResult('btt_bgd_on'),main.loadedData.getResult('btt_bgd'),'#fff',btt_obj,Level2);

        btt1.x = 195+btt1.regX;
        btt1.y = 491+btt1.regY;
        left.addChild(btt1);
        TweenLite.from(btt1,1,{alpha:0,ease:Elastic.easeOut,delay:1+Math.random()});
    };

    window.LevelComplete = c.promote(LevelComplete, "Container");

}());
