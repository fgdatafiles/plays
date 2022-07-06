
(function()
{
    'use strict';
    var t;

    function Sweet()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var sweet = c.extend(Sweet, c.Container);
    Sweet.prototype.img;
    Sweet.prototype.nY;

    sweet.initialize=function()
    {
        this.img = new createjs.Bitmap(main.loadedData.getResult('o'+main.selectedItem));
        this.img.rotation =360*Math.random();
        this.nY = 2+Math.floor(Math.random()*5);
        this.addChild(this.img);
        this.y = -10;
        this.x = 470+Math.random()*700;


    };
    sweet.reset = function(){

        this.removeChild(this.img);
        this.img = null;
        this.img = new createjs.Bitmap(main.loadedData.getResult('o'+main.selectedItem));
        this.nY = 2+Math.floor(Math.random()*5);
        this.img.rotation =360*Math.random();
        this.addChild(this.img);
        this.y = -10;
        this.x = 470+Math.random()*700;

    };

    sweet.update=function(){

    };

    sweet.gameOver=function(){

    };


    window.Sweet = c.promote(Sweet, "Container");
}());
