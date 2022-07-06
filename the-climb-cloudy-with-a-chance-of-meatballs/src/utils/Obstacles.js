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
    var nYOffset = 624;
    
    var Obstacles=function(record)
    {

        this.initialize(record);
        this.bCheck = false;
        this.nY;
        this.falling = false;

    };
    var obstacles=Obstacles.prototype=new createjs.Container();
    obstacles.Container_initialize=obstacles.initialize;
    obstacles.initialize=function(record) {
        this.Container_initialize();
        t = this;
        this.nY = 0;

         ground0 = new c.Bitmap(main.loadedData.getResult('game_bgd'));
         ground1  = new c.Bitmap(main.loadedData.getResult('sky'));
         line  = new c.Bitmap(main.loadedData.getResult('line'));
        this.addChild(ground1);
        this.addChild(ground0);
        this.addChild(line);

        ground1.y = -2048;
        line.y = -(record*10)+nYOffset;
        this.reset();
    };

    obstacles.createFirst = function(){
        while(this.numChildren>3){
            this.removeChildAt(3);
        }
        rect ={x:270,y:700,width:63,height:10};
        for (var i = 0; i < 7; i++) {
            platform = new Platform(isBonus());
            this.addChild(platform);
            var randX = 90+Math.max(((Math.random() * 390)-rect.width),0);
            var yM= (120+Math.random()*50)/game.nDifficultyMultiplayer;
            var randY = rect.y - yM;
            platform.x =randX;
            platform.y = randY;

            nCounter++;


            platform = new Platform(false);
            this.addChild(platform);
            console.log(randX+ "RANDX");
            if(randX<290){
                randX =480-100;
            }else{
                randX=90;
            }
            var yM= (120+Math.random()*50)/game.nDifficultyMultiplayer;
            var randY = rect.y - yM;
            platform.x =randX;
            platform.y = randY;

            rect = {x: platform.x, y: platform.y, width: platform.bgd.image.width, height: 10};
        }
    }
    function isBonus(){

        if(Math.random()<game.bonus_chance){


            var num = Math.random();
            if(num<game.points_bonus_chance){
                return 'bonus'+Math.ceil(Math.random()*5);
            }else if(num<(game.points_bonus_chance+game.points2_bonus_chance)){
                return 'bonus6';
            }else if(num<(game.points_bonus_chance+game.points2_bonus_chance+game.points3_bonus_chance)){
                return 'bonus7'
            }else if(num<(game.points_bonus_chance+game.points2_bonus_chance+game.points3_bonus_chance+game.trampoline_bonus_chance)){

                return 'bonus8'
            }else if(num<(game.points_bonus_chance+game.points2_bonus_chance+game.points3_bonus_chance+game.trampoline_bonus_chance+game.multiply_bonus_chance)){
                return 'bonus9';
            }else{
                return 'bonus10';
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
                /*if(this.y >1024){

                    this.y = 1024;
                }*/


                this.falling = true;

            }
        }


        nCurrentPage=Math.floor((this.y-1024)/1024);
            ground1.y=-2048-(nCurrentPage*1024);

        if(-this.getChildAt(3).y-this.y<-1024){
            
                this.removeChildAt(3);
                this.addItem();
        }

    };


    obstacles.addItem = function(){
        platform = new Platform(isBonus());
        this.addChild(platform);

        var randX =90 + Math.max(((Math.random() * 390)-rect.width),0);

        var randY = rect.y - 150;///Math.random() * (game.player.jumpSpeed * game.gravity);
        platform.x = randX;
        platform.y = randY;
        rect = {x: platform.x, y: platform.y, width: platform.bgd.image.width, height: 10};
        nCounter++;
    }
    window.Obstacles=Obstacles;
}
    ());

