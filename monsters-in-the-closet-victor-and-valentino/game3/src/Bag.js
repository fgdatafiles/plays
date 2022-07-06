
(function()
{
    'use strict';
    var t;

    var oldX;
    var oldY;

    var ti;
    var ti2;
    var yell;
    var cuks;
    var tim;
    var holder;
    function Bag()
    {
        this.Container_constructor();
        t = this;
        this.initialize();
    };
    var bag = c.extend(Bag, c.Container);
    Bag.prototype.hit = function(n){

    };
    Bag.prototype.counter=0;
    Bag.prototype.img;
    Bag.prototype.update = function(){

    };
    Bag.prototype.clear = function(){

    };
    Bag.prototype.update1 = function(){

        this.x=  Math.round(stage.mouseX / scaleS)-pageContainer.x;

    };
    bag.gameOver = function(){
        this.update = this.clear;
        TweenLite.to(this,1,{alpha:0});
    };
    bag.Container_initialize=bag.initialize;
    bag.addPoint=function(){
        this.counter++;
        playSounds('show'+Math.ceil(Math.random()*2))
        timer2Points.text=parseInt(this.counter*100);
        if(this.counter>=50){
            t.removeChild(cuks);
            cuks = new createjs.Bitmap(main.loadedData.getResult('o'+main.selectedItem+'_2'));
            holder.addChild(cuks);
            cuks.x = 22;
            cuks.y = -13;
        }else if(this.counter>=30){
            t.removeChild(cuks);
            cuks = new createjs.Bitmap(main.loadedData.getResult('o'+main.selectedItem+'_1'));
            holder.addChild(cuks);
            cuks.x = 21;

        }else if(this.counter>=10){
            cuks = new createjs.Bitmap(main.loadedData.getResult('o'+main.selectedItem+'_0'));
            holder.addChild(cuks);
            cuks.x = 22;
            cuks.y = 8;
        }

        addYell();
    };
    function addYell(){
        
        clearTimeout(tim);
        yell.visible = true;
        yell.y = 20;
        yell.alpha=0;
        TweenLite.to(yell,0.5,{y:-21,alpha:1});
        tim =setTimeout(function(){yell.visible = false;},500);

    }
    bag.initialize=function()
    {

        this.counter=0;
        var bgd = new createjs.Bitmap(main.loadedData.getResult('htp2_p1'));
       this.img = new createjs.Bitmap(main.loadedData.getResult('hit'));
        this.img.x = 23;
        this.img.y = 2;
        this.img.visible = false;
        this.regX = this.img.image.width/2;
        this.x = main.nWidth/2;
        this.addChild(bgd);
        this.addChild(this.img);
        this.y= 598;

        holder = new createjs.Container();
        t.addChild(holder);
        ti = new createjs.Text('0', '30px FredBold', '#000000');
        ti.lineWidth =bgd.image.width;
        ti.textAlign = 'center';
        ti.x =ti.lineWidth/2-16;
        ti.y = 82;
        t.addChild(ti);
        yell = new createjs.Container();
        var b = new createjs.Bitmap(main.loadedData.getResult('yell'));

        yell.addChild(b);
        yell.x = 53;
        yell.y = -21;
        yell.visible = false;

        t.addChild(yell);
        //t.addCh

    this.update = this.update1;
    };

    window.Bag = c.promote(Bag, "Container");
}());
