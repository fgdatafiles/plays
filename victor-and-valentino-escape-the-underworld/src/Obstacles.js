
(function()
{
    'use strict';
    var t,hero;

    var nScaleDifference;
    var nYDiffrence;
    var nScaleDepofHeight;
    var elevator,grandmahouse;
    var checkOutInterval;
    var obstacles_container;
     var oldMouseY,oldMouseX,isHit,state;

    var booom = {
        "framerate":24,
        "images":["img/boom_animation.png"],
        "frames":[
            [1736, 0, 1, 1, 0, 0, 0],
            [1648, 0, 88, 100, 0, -87, -52],
            [1357, 0, 147, 137, 0, -59, -20],
            [0, 0, 212, 169, 0, -16, -1],
            [212, 0, 243, 162, 0, -4, -4],
            [626, 0, 234, 154, 0, -13, -9],
            [1023, 0, 179, 148, 0, -37, -11],
            [1202, 0, 155, 147, 0, -53, -11],
            [860, 0, 163, 149, 0, -49, -7],
            [455, 0, 171, 156, 0, -46, -4],
            [1504, 0, 144, 128, 0, -73, -23]
        ],
        "animations":{
            "st": {"speed": 1, "frames": [0]},
            "anim": {
                "next": "st",
                "speed": 1,
                "frames": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        }
    };
    function Obstacles()
    {
        this.Container_constructor();
        nScaleDifference = 1-  activeConfig.nMinScale;
        nYDiffrence = activeConfig.nMaxY-activeConfig.nMinY;
        t = this;
        this.initialize();

    };
    var p = createjs.extend(Obstacles, createjs.Container);

    p.initialize=function() {

        obstacles_container = new c.Container();
        this.addChild(obstacles_container)
        hero = new Hero(postac);
        obstacles_container.addChild(hero);
        hero.x = 464;
        hero.y = 403;
        hero.name = 'hero';
        hero.scaleX = hero.scaleY = scaleByY(hero.y);
        p.addObstacles();
        p.addPoints();
        p.addBonusItem();

        stage.addEventListener('stagemousemove', this.moveMouse);
        stage.addEventListener('pressmove', this.moveMouse);
        p.updateZPosition();
        checkOutInterval = setInterval(p.checkOut,1000);
        
        var boomSprite = new c.SpriteSheet(booom);
        this.bom = new c.Sprite(boomSprite,'st');
        this.bom.regX = 335/2;
        this.bom.regY = 228/2;
        this.addChild(this.bom);
    };


    p.addPoints = function(){

        for (var i=0;i<activeConfig.nMaxPoints;i++){
            t.addPointsItem(true);
        }
    };
    p.addObstacles = function(){

        for (var i=0;i<activeConfig.nMaxItems;i++){
            t.addItem(true);
        }
    };
    p.moveMouse = function(){


        var mouseX = Math.min((Math.max(((Math.round(stage.mouseX / scaleS))-pageContainer.x),308+activeConfig.heroActiveAreaPadding)),1332-activeConfig.heroActiveAreaPadding);
        var mouseY =Math.max(Math.min(Math.round(stage.mouseY / scaleS),activeConfig.nMaxY),activeConfig.nMinY);
        var nX = Math.round(hero.x);
        var nY = Math.round(hero.y);
        TweenMax.killTweensOf(hero);
        TweenLite.to(hero,.5,{x:mouseX,y:mouseY,ease:Power1.easeOut});

        oldMouseX=mouseX;
        oldMouseY=mouseY;

        p.updateZPosition();
    };

    p.updateZPosition = function(){
        obstacles_container.children.sort(function(a,b){
            return a.y-b.y;
        })


    };

    function removeAllInvisiblesObjects(){
        for(var i =0;i<obstacles_container.numChildren;i++){
            var item = obstacles_container.getChildAt(i);
            if(item.name!='hero'){
                TweenLite.to(item,2.4,{alpha:0,onComplete:removeItem,onCompleteParams:[item]})

            }
        }


    };
    function removeItem(i){
        obstacles_container.removeChild(i);
        i = null;

    }
    p.checkOut = function(){


        var obst=0;
        var points=0;
        var bonuses=0;
        for(var i =0;i<obstacles_container.numChildren;i++){
                if(obstacles_container.getChildAt(i).name.substr(0,1)=='o')obst++;
                if(obstacles_container.getChildAt(i).name.substr(0,1)=='p')points++;
                if(obstacles_container.getChildAt(i).name.substr(0,1)=='b')bonuses++;
        }


            while(obst<activeConfig.nMaxItems){
                obst++;
                p.addItem();
            }
            while(points<activeConfig.nMaxPoints){
                points++;
                p.addPointsItem();
            }

        if( bonuses<activeConfig.nMaxBonuses&&Math.random()<activeConfig.nChanceForBonus){
            bonuses++;
            p.addBonusItem();
        }


    };

    p.update= function(){

        hero.scaleX = hero.scaleY  =scaleByY(hero.y);
        var toCheck=[];
        for(var i=0;i<obstacles_container.numChildren;i++){
            var item = obstacles_container.getChildAt(i);

            if(item.name !='hero'){
                
                if(item.hz&&!activeConfig.level_ended){
                    toCheck.push(item)
                }
                item.x -=activeConfig.speed3;

                if(item.x<-item.regX){

                    obstacles_container.removeChild(item);
                    item.destroy();

                }
            }
        }
        toCheck.forEach(function(item) {

            if (ndgmr.checkRectCollision(hero.hz, item.hz)) {

                var aa = item.name.substr(0,1);
                switch (aa){

                    case 'o':

                        t.bom.x = hero.x;
                        t.bom.y = hero.y-50;
                        t.bom.gotoAndPlay('anim');
                        hud.changeEnergyBar(-.1);
                        item.disable();
                        obstacles_container.removeChild(item);
                        playSounds('hit'+Math.ceil(Math.random()*8));
                        break;
                    case 'p' :
                        p.addPointsAnim();
                        playSounds('point1');
                        obstacles_container.removeChild(item);
                        break;

                    case 'b':
                        playSounds('bonus'+Math.ceil(Math.random()*5));
                        p.addBonus(parseInt(item.name.substr(1,1)));
                        obstacles_container.removeChild(item);
                        break;


                }

            };
        });
    };


    p.addBonus = function(n){
            var s;
        if(n==1){

            hud.addTime();
            s='time_b';
        }else{
            s = 'energy_b';
            hud.changeEnergyBar(0.1);

        }

        var img =new c.Bitmap(main.loadedData.getResult(s));
        t.addChild(img);
        img.x = hero.x-hero.hz.image.width/2;
        img.y = hero.y-150;

        TweenLite.to(img,1,{y:img.y-150,scale:1.2,alpha:0,onComplete:sendToGarbageCollection,onCompleteParams:[img]});
    }


    p.addPointsAnim = function(){

        var img =new c.Bitmap(main.loadedData.getResult('points_b'));
        t.addChild(img);
        img.x = hero.x-hero.hz.image.width/2;
        img.y = hero.y-150;
        hud.addPoints();
        TweenLite.to(img,1,{y:img.y-150,scale:1.2,alpha:0,onComplete:sendToGarbageCollection,onCompleteParams:[img]});


    };


    function sendToGarbageCollection(i){
        t.removeChild(i)
    }

    p.addBonusItem = function(b){

        
        var item = new BonusItem();

        item.y =activeConfig.nMinY+Math.ceil((Math.random()*nYDiffrence));

        item.scaleX = item.scaleY = scaleByY(item.y);
        item.x =ow+Math.ceil(Math.random());
        obstacles_container.addChild(item);
        p.updateZPosition();

    }

    p.addPointsItem = function(b){


        var  item = new Point();

        item.name='p';
        item.y =activeConfig.nMinY+(Math.random()*nYDiffrence);
        item.scaleX = item.scaleY = scaleByY(item.y);
        item.x =ow+Math.ceil(Math.random()*activeConfig.nPosItemOffScreen);
        if(b){
            item.x=ow+( Math.random()*ow);
        }else{
            item.x =ow+Math.random()*activeConfig.nPosItemOffScreen;
        }
        obstacles_container.addChild(item);
        p.updateZPosition();

    }

    p.addItem = function(b){

        var num = Math.ceil(Math.random()*activeConfig.nObstaclesTypes);
       var  item = new Blocker(num);

        item.y =activeConfig.nMinY+(Math.random()*nYDiffrence);
        item.name = 'o'+num;
        item.scaleX = item.scaleY = scaleByY(item.y);
        if(b){
            item.x=ow+( Math.random()*ow);
        }else{
            item.x =ow+Math.random()*activeConfig.nPosItemOffScreen;
        }
        obstacles_container.addChild(item);
        p.updateZPosition();

    }
    
    //////////////////// PO SKONCZENIU ŻYCIA

    p.onLevel1LifeEndedAnimation=function(){

        hero.fail();
        this.wylaczWszystko();

    };
    p.onLevel2LifeEndedAnimation=function(){

        hero.fail();
        this.wylaczWszystko();
    };

    p.wylaczWszystko = function(){


        clearInterval(checkOutInterval);
        stage.removeEventListener('stagemousemove', this.moveMouse);
        stage.removeEventListener('pressmove', this.moveMouse);
        removeAllInvisiblesObjects();

        TweenLite.to(activeConfig,2,{speed1:0});
        TweenLite.to(activeConfig,2,{speed2:0});
        TweenLite.to(activeConfig,2,{speed3:0,onComplete:dispatchAnimOver});


    }


    //////////////////// PO SKONCZENIU CZASU




    p.onLevel1EndedAnimation =  function(){
        hero.onAnimEnded();
        clearInterval(checkOutInterval);
        stage.removeEventListener('stagemousemove', this.moveMouse);
        stage.removeEventListener('pressmove', this.moveMouse);
        removeAllInvisiblesObjects();
        //var scaleTo = scaleByY((oh/2)+100);
        TweenLite.to(hero,2,{x:ow/2,y:oh/2+100,scale:0.9,onComplete:slowDownLevel1});
        elevator = new Lift1();
        elevator.x =1640;
        elevator.y =200;
        elevator.addEventListener('endAnim',dispatchAnimOver);
        obstacles_container.addChildAt(elevator,0);
    };

    p.onLevel2EndedAnimation =  function(){
        hero.onAnimEnded();
        clearInterval(checkOutInterval);
        stage.removeEventListener('stagemousemove', this.moveMouse);
        stage.removeEventListener('pressmove', this.moveMouse);
        removeAllInvisiblesObjects();
        //var scaleTo = scaleByY((oh/2)+100);

        TweenLite.to(hero,2,{x:ow/2,y:oh/2+220,scale:0.9,onComplete:slowDownLevel2});

    };


    function slowDownLevel2(){
        hero.stopSound();
        grandmahouse = new GrandmaHouse()
        grandmahouse.x =1640;
        grandmahouse.addEventListener('endAnim',dispatchAnimOver);
        obstacles_container.addChildAt(grandmahouse,0);
        TweenLite.to(grandmahouse,5,{x:1000,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed1:0,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed2:0,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed3:0,ease:Power3.easeOutt,onComplete:gotoHouse});

    }

    function gotoHouse(){

        TweenLite.to(hero,2,{x:1200,scale:0.8,alpha:0,onComplete:dispatchAnimOver});
    }
    function slowDownLevel1(){
        hero.stopSound();
        TweenLite.to(elevator,5,{x:1000,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed1:0,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed2:0,ease:Power3.easeOut});
        TweenLite.to(activeConfig,5,{speed3:0,ease:Power3.easeOut,onComplete:gotoElevator});
    }
    function gotoElevator(){

        TweenLite.to(hero,1,{alpha:0,onComplete:dispatchLevelOver});
    }


    function dispatchLevelOver(){

        elevator.wlaczAnimacje();

    }
    function dispatchAnimOver(){
        t.dispatchEvent('levelEnded');
    }


////////////////////////////// OBSLUGA PAUZY
    p.pause=function(){
        stage.removeEventListener('stagemousemove', this.moveMouse);
        stage.removeEventListener('pressmove', this.moveMouse);
    };
    p.unpause = function(){
        stage.addEventListener('stagemousemove', this.moveMouse);
        stage.addEventListener('pressmove', this.moveMouse);
    };
    p.destroy = function(){
		clearInterval(checkOutInterval);
        hero.destroy();
        t.removeAllChildren();

        stage.removeEventListener('stagemousemove', this.moveMouse);
        stage.removeEventListener('pressmove', this.moveMouse);

    };
    function scaleByY(nY){
        return activeConfig.nMinScale+(nScaleDifference*((nY-activeConfig.nMinY)/nYDiffrence));
    }


    window.Obstacles = createjs.promote(Obstacles, "Container");
}());
