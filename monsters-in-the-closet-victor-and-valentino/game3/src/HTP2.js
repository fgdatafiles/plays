
(function()
{
    'use strict';
    var t;
    var spadajkiContainer;
    var bmp,intro_logo,btt1,t1,t2,p1,p2,hud,logo_game1;
    function Htp2()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = c.extend(Htp2, c.Container);
    p.initialize=function() {

        backBtt.visible= true;

        playSounds('level_complete');
        bmp = new  c.Bitmap(main.loadedData.getResult('game1_bgd'));
        t.addChild(bmp);


        var black=new createjs.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        t.addChild(black)
        TweenLite.to(black,1,{alpha:0.7});

        intro_logo=new c.Bitmap(main.loadedData.getResult('logo_intro'));
        intro_logo.x = 402;
        intro_logo.y = 11;
        t.addChild(intro_logo);

        TweenLite.from(intro_logo,2,{y:-200,ease:Strong.easeOut,delay:.5});

        logo_game1=new c.Container();

        bmp = new  c. Bitmap(main.loadedData.getResult('logo_game3'));
        logo_game1.addChild(bmp);
        logo_game1.scaleX = logo_game1.scaleY = 0.52;
        logo_game1.x = 1034;
        logo_game1.y = -57;
        t.addChild(logo_game1);
        TweenLite.from(logo_game1,2,{y:-200,ease:Strong.easeOut,delay:.8});


        spadajkiContainer = new c.Container();

        t.addChild(spadajkiContainer);
        spadajkiContainer.x = 308;
        var spadajka
        for (var i=0;i<20;i++){

            spadajka = new c.Bitmap(main.loadedData.getResult('o'+main.selectedItem));
            spadajka.regX  = spadajka.image.width/2;
            spadajka.regY = spadajka.image.height/2;
            spadajka.name = 's'+parseInt( 2+Math.floor(Math.random()*5));
            spadajkiContainer.addChild(spadajka);
            spadajka.x = Math.random()*1024;
            spadajka.y = -500+(Math.random()*400);



        }
        t.addEventListener('tick', t.update);



        btt1 = new  FrameBtt(main.loadedData.getResult('play_off'),main.loadedData.getResult('play_on'));
        btt1.regX = 188/2;
        btt1.regY = 182/2;
        btt1.x = 1038+btt1.regX;
        btt1.y = 432+btt1.regY;
        t.addChild(btt1);
        TweenLite.from(btt1,1,{scale:0,ease:Elastic.easeOut,delay:1+Math.random(),onComplete:wlaczBtt});

        var hud  = new c.Container();

        var bmp =new c.Bitmap(main.loadedData.getResult('hud_htp2'));
        hud.addChild(bmp);
        hud.x = 614;
        hud.y = 14;
        t.addChild(hud);
        TweenLite.from(hud,2,{y:-200,ease:Strong.easeOut,delay:.5});

        var icon = new c.Bitmap(main.loadedData.getResult('o'+main.selectedItem));
        icon.regX = icon.image.width/2;
        icon.regY = icon.image.height/2;
        icon.x = 235;
        icon.y = 52;
        hud.addChild(icon);

        p1 = new c.Bitmap(main.loadedData.getResult('htp2_p1'));
        t.addChild(p1);
        p1.regY = p1.image.height/2;
        p1.x = 534;
        p1.alpha=0;
        p1.y = 598+p1.regY;

        TweenMax.to(p1,2,{alpha:1});
        TweenMax.to(p1,2,{x:934,delay:2.1,repeat:-1,yoyo:true,ease:Power1.easeInOut});


        t1 = new c.Container();
        var bmp = new c.Bitmap(main.loadedData.getResult('htp2_t1'));
        t1.addChild(bmp)


        var text1 =   new c.Text(strings.pages.htp.t3.text, strings.pages.htp.t3.font, '#49291F');
        text1.textAlign = 'center';
        text1.x = 310/2+strings.pages.htp.t3.x;
        text1.lineWidth=397;
        text1.y = 48+strings.pages.htp.t3.y;
        t1.addChild(text1);
        t.addChild(t1);
        t1.regX =92;
        t1.regY =252;
        t1.x = 711+t1.regX;
        t1.y = 356+t1.regY;
        TweenMax.from(t1,2,{scale:0,delay:1,ease:Elastic.easeOut});





        t.addChild(p1,p2,t1,t2,hud);




    };


    p.update = function(){

        
        var item;
        for(var i=0;i<spadajkiContainer.numChildren;i++){


            item = spadajkiContainer.getChildAt(i);

            var zz =parseInt(item.name.substr(1));

            item.y+=zz;
            if(item.y >=680 ){
                item.y = -500+(Math.random()*400);
                item.x = Math.random()*1024;
            }

        }

    }
    function wlaczBtt(){
        btt1.addEventListener('click',onDispatch);
    }
    function onDispatch(){
        t.removeEventListener('tick', t.update);
        t.mouseEnabled = false;
        t.dispatchEvent({param: Game2, type:'changePage',bubbles:true,cancelable:true});
    }


    window.Htp2 = c.promote(Htp2, "Container");

}());
