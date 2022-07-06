
(function()
{
    'use strict';
    var t;

    var oldX;
    var oldY;
    var counter = 0;

    var Bat=function()
    {
        this.initialize();
    };
    var bat=Bat.prototype=new createjs.Container();
    Bat.prototype.hit = function(n){

    };

    Bat.prototype.img;
    Bat.prototype.update = function(){


    };

    bat.gameOver = function(){
        this.update = this.clear;
        TweenLite.to(this,1,{alpha:0});
    };

    Bat.prototype.clear = function(){

    };
    Bat.prototype.update1 = function(){
        var mouseX =stage.mouseX;
        var rot = ((mouseX - (main.nWidth/2))/(main.nWidth/2))*40;
        if(counter==10){
            TweenMax.to(this,1,{rotation:rot,ease:Elastic.easeOut});
            counter=0;
        }
        this.x=  stage.mouseX/main.scale;
        this.y=  stage.mouseY/main.scale;
        counter++;
    };
    bat.Container_initialize=bat.initialize;
    bat.initialize=function()
    {
        t= this;
       this.img = new createjs.Bitmap(main.loadedData.getResult('bat2'));
        this.regX = this.img.image.width/2-10;
        this.regY = this.img.image.height-50;
        this.addChild(this.img);
        this.update = this.update1;


    };


    window.Bat=Bat;
}());
