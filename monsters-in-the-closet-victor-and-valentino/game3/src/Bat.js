
(function()
{
    'use strict';
    var t;

    var oldX;
    var oldY;
    var counter = 0;

    function Bat()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var bat = c.extend(Bat, c.Container);
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
        var mouseX =stage.mouseX*scaleS;
        if(mouseX<ow/2){
            this.scaleX=-1;
        }else{
            this.scaleX=1;
        }

        var rot = ((mouseX - ((main.nWidth*scaleS)/2))/((main.nWidth*scaleS)/2))*60;
        if(counter==5){
            TweenMax.to(this,1,{rotation:rot,ease:Power4.easeOut});
            counter=0;
        }


        this.x=  Math.round(stage.mouseX / scaleS)-pageContainer.x;
        this.y= Math.round(stage.mouseY / scaleS);
        counter++;
    };
    bat.initialize=function()
    {
        t= this;
       this.img = new createjs.Bitmap(main.loadedData.getResult('bat2'));
        this.regX = 27
        this.regY = 187;
        this.addChild(this.img);
        this.update = this.update1;


    };

    window.Bat = c.promote(Bat, "Container");

}());
