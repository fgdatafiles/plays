var rect ={x:270,y:700,width:63,height:10};
(function(){
    'use strict';
    var t;
    var platform;
    var bgd;

    var nCounter=1;
    var sky;
    var nCurrentPage=-1;
    var ground0,ground1,line;
    var nYOffset = 824;
    
    var Obstacles=function()
    {

        this.initialize();
        this.bCheck = false;
        this.nY;
        this.falling = false;

    };
    var obstacles=Obstacles.prototype=new createjs.Container();
    obstacles.Container_initialize=obstacles.initialize;
    obstacles.initialize=function() {
        this.Container_initialize();
        t = this;
        this.nY = 0;

         ground0 = new c.Bitmap(main.loadedData.getResult('level'+game.nCurrentLevel+'_bottom'));
         ground1  = new c.Bitmap(main.loadedData.getResult('level'+game.nCurrentLevel+'_up'));

        this.addChild(ground1);
        this.addChild(ground0);


        ground1.y = -2730;

        this.reset();
    };

    obstacles.createFirst = function(){
        while(this.numChildren>3){
            this.removeChildAt(3);
        }
        rect ={x:270,y:1000,width:63,height:10};

        for (var i = 0; i < 7; i++) {
            platform = new Platform(isBonus());
            this.addChild(platform);
            var randX = 90+Math.max(((Math.random() * 600)-rect.width),0);
            var yM= (120+Math.random()*50)/game.nDifficultyMultiplayer;

            var randY = rect.y - yM;


            platform.x =randX;
            platform.y = randY;

            if(i===0){
                platform.alpha=0;
            }

            nCounter++;


            platform = new Platform(false);
            this.addChild(platform);

            if(randX<290){
                randX =580-100;
            }else{
                randX=90;
            }
            yM= (120+Math.random()*50)/game.nDifficultyMultiplayer;
            var randY = rect.y - yM;
            platform.x =randX;
            platform.y = randY;

            rect = {x: platform.x, y: platform.y, width: platform.bgd.image.width, height: 10};
        }
    }
    function isBonus(){


        var isBonus =Math.random();
        if(isBonus<=game.bonus_chance){
            // jesli jest jakikolwiek bonus
            var whatBonus = Math.random();
            if(whatBonus<game.points_bonus_chance){

                //czy to są zwyczajne punkty

                return 'bonus'+Math.ceil(Math.random()*3)+'_l'+game.nCurrentLevel;
            }else if(whatBonus<=(game.points_bonus_chance+game.points2_bonus_chance)){


                // czy to są +200pkt
                return 'bonus4';
            }else if(whatBonus<=(game.points_bonus_chance+game.points2_bonus_chance+game.trampoline_bonus_chance)){

                // czy to jest trampolina
                return 'bonus5'
            }else if(whatBonus<=(game.points_bonus_chance+game.points2_bonus_chance+game.trampoline_bonus_chance+game.multiply_bonus_chance)){


                //czy to jest czasowe podwojne punkty
                return 'bonus6';
            }else{
                //czy to jest zwolnienie

                return 'bonus7';
            }

        }else{
            return false;
        }
    }
    obstacles.reset=function(){


        this.falling=false;
        this.createFirst();

    }
    obstacles.update = function() {


        if(this.bCheck){
            this.nY = this.y;
            this.bCheck=false;
        }else if(!this.falling){

            if(this.nY-this.y>400){

                this.falling = true;

            }
        }


        nCurrentPage=Math.floor((this.y-1365)/1365);
            ground1.y=-2730-(nCurrentPage*1365);

            var toDelete;
            try {
                toDelete = this.getChildAt(3);
                if(toDelete&&(-toDelete.y - this.y < -1365)) {

                    this.removeChildAt(3);
                    this.addItem();
                }

            }catch(e){

            }


    };


    obstacles.addItem = function(){
        platform = new Platform(isBonus());
        this.addChild(platform);

        var randX =90 + Math.max(((Math.random() * 590)-rect.width),0);

        var randY = rect.y - 150;
        platform.x = randX;
        platform.y = randY;
        rect = {x: platform.x, y: platform.y, width: platform.bgd.image.width, height: 10};
        nCounter++;
    };
    window.Obstacles=Obstacles;
}
    ());

