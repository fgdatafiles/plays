
(function()
{
    'use strict';
    var t;
    var bgd1,bgd2,suwak,logo,btt1,btt2,black,sh1,sh2,left,right;
    function Split()
    {

        this.Container_constructor();
        t = this;
        this.initialize();

    }
    var p = c.extend(Split, c.Container);

    p.initialize=function() {

        
        bgd1=new c.Container();
        t.addChild(bgd1);
        var i = new c.Bitmap(main.loadedData.getResult('split_monte_bgd'));
        bgd1.addChild(i);

        btt1 = new c.Bitmap(main.loadedData.getResult('split_monte'));
        btt1.x =510;
        btt1.y =272;
        bgd1.addChild(btt1);


        bgd2 =new c.Container();
        t.addChild(bgd2);
        i = new c.Bitmap(main.loadedData.getResult('split_underworld_bgd'));
        bgd2.addChild(i);


        btt2 = new c.Bitmap(main.loadedData.getResult('split_underworld'));
        btt2.x =827;
        btt2.y =272;

        bgd2.addChild(btt2);


        suwak = new  c.Bitmap(main.loadedData.getResult('suwak'));
        suwak.regX = suwak.image.width/2;
        suwak.x  = 1640/2;



        black=new c.Shape(new createjs.Graphics().beginFill('#000').drawRect(0,0,1640,680));
        t.addChild(black);

        TweenLite.to(black,1,{alpha:0,onComplete:removeBlack});





        t.addChild(suwak);

        sh1=new createjs.Shape(new createjs.Graphics().beginFill('#f00').drawRect(0,0,1640,680));
        t.addChild(sh1);
        sh1.x  = -820;
        sh1.cursor = 'pointer';
        sh1.visible = false;



        sh2=new createjs.Shape(new createjs.Graphics().beginFill('#f00').drawRect(0,0,1640,680));
        t.addChild(sh2);
        sh2.x  = 820;
        sh2.visible = false;

        bgd2.mask = sh2;
        bgd1.mask = sh1;

/*
        btt1.addEventListener('mouseover',onMO1);
        btt1.addEventListener('mouseout',onMOU1);
        btt2.addEventListener('mouseover',onMO2);
        btt2.addEventListener('mouseout',onMOU1);

        btt1.addEventListener('click',onMap1);
        btt2.addEventListener('click',onMap2);
 */

         left = new c.Shape(new createjs.Graphics().beginFill('red').drawRect(0,0,820,680));
         right = new c.Shape(new createjs.Graphics().beginFill('blue').drawRect(820,0,820,680));
        t.addChild(left);
        left.alpha = right.alpha =.01;
        t.addChild(right);
        left.addEventListener('mouseover',onMO1);
        left.addEventListener('mouseout',onMOU1);
        right.addEventListener('mouseover',onMO2);
        right.addEventListener('mouseout',onMOU1);

        right.cursor = 'pointer';
        left.cursor = 'pointer';
        left.addEventListener('click',onMap1);
        right.addEventListener('click',onMap2);

        var logo_split = new c.Bitmap(main.loadedData.getResult('logo_split'));
        logo_split.x=689;
        logo_split.y=35;
        t.addChild(logo_split);
        logo_split.mouseEnabled=  false;
        
        var victor = new c.Container();


        var bmp =  new c.Bitmap(main.loadedData.getResult('split_victor'));
        victor.addChild(bmp);

        
        var txt = new c.Text(strings.pages.global.split_t1.text, strings.pages.global.split_t1.font, '#4a2a1f');
        txt.textAlign='center';
        txt.x = strings.pages.global.split_t1.x;
        txt.y = strings.pages.global.split_t1.y;
        victor.addChild(txt);

        txt = new c.Text(strings.pages.global.split_t2.text, strings.pages.global.split_t2.font, '#4a2a1f');
        txt.textAlign='center';
        victor.addChild(txt);
        txt.x = strings.pages.global.split_t2.x;
        txt.y = strings.pages.global.split_t2.y;


        t.addChild(victor);
        victor.x=354;
        victor.y=410;


        var valentino = new c.Container();

        bmp =  new c.Bitmap(main.loadedData.getResult('split_valentino'));
        valentino.addChild(bmp);

        t.addChild(valentino);
        valentino.x=1150;
        valentino.y=353;

    };

    function onMO1(){
        playSounds('monte'+Math.ceil(Math.random()*7))
        TweenLite.to(btt1,2,{ease:Strong.easeOut,x:710});
        TweenLite.to(btt2,2,{ease:Strong.easeOut,x:610});
        TweenLite.to(sh1,2,{ease:Strong.easeOut,x:-620});
        TweenLite.to(sh2,2,{ease:Strong.easeOut,x:1020});
        TweenLite.to(suwak,2,{ease:Strong.easeOut,x:1020})
    }
    function onMOU1(){
        TweenLite.to(btt2,2,{ease:Strong.easeOut,x:827});
        TweenLite.to(btt1,2,{ease:Strong.easeOut,x:510});
        TweenLite.to(sh1,2,{ease:Strong.easeOut,x:-820});
        TweenLite.to(sh2,2,{ease:Strong.easeOut,x:820});
        TweenLite.to(suwak,2,{ease:Strong.easeOut,x:820})
    }


    function onMO2(){
        playSounds('monster'+Math.ceil(Math.random()*9))

        TweenLite.to(btt1,2,{ease:Strong.easeOut,x:823});
        TweenLite.to(btt2,2,{ease:Strong.easeOut,x:627});
        TweenLite.to(sh1,2,{ease:Strong.easeOut,x:-1020});
        TweenLite.to(sh2,2,{ease:Strong.easeOut,x:620});
        TweenLite.to(suwak,2,{ease:Strong.easeOut,x:620})
    }

    function onMap1(){
        btt1.removeEventListener('mouseover',onMO1);
        btt1.removeEventListener('mouseout',onMOU1);
        btt2.removeEventListener('mouseover',onMO2);
        btt2.removeEventListener('mouseout',onMOU1);

        TweenLite.to(btt1,1,{alpha:0});
        TweenLite.to(btt2,1,{alpha:0});
        TweenLite.to(suwak,2,{ease:Strong.easeOut,x:1640});
        TweenLite.to(sh1,2,{ease:Strong.easeOut,x:0});
        TweenLite.to(sh2,2,{ease:Strong.easeOut,x:1640});
        t.addChild(black);

        TweenLite.to(black,1,{delay:1,alpha:1,onComplete:dispatchEnd});
        actual_world =1;
        createCookie('actual_world',actual_world,255);
    }

    function onMap2(){
        btt1.removeEventListener('mouseover',onMO1);
        btt1.removeEventListener('mouseout',onMOU1);
        btt2.removeEventListener('mouseover',onMO2);
        btt2.removeEventListener('mouseout',onMOU1);

        TweenLite.to(btt1,1,{alpha:0});
        TweenLite.to(btt2,1,{alpha:0});
        TweenLite.to(suwak,2,{ease:Strong.easeOut,x:0});
        TweenLite.to(sh2,2,{ease:Strong.easeOut,x:0});
        TweenLite.to(sh1,2,{ease:Strong.easeOut,x:-1640});
        t.addChild(black);
        TweenLite.to(black,1,{delay:1,alpha:1,onComplete:dispatchEnd});
        actual_world =2;
        createCookie('actual_world',actual_world,255);

    }
    function removeBlack(){
        t.removeChild(black);
    }
    p.dispatchStep = function(){

        
    };


    function dispatchEnd(){
        t.dispatchEvent({param: Map, type:'changePage',bubbles:true,cancelable:true});
    }




    window.Split = c.promote(Split, "Container");

}());
