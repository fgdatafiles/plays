
(function()
{
    'use strict';
    var t;
    var dron;
    var Item=function()
    {
        this.initialize();
    };
    var item=Item.prototype=new createjs.Container();
    Item.prototype.img;
    Item.prototype.hz;
    Item.prototype.nY;
    Item.prototype.beReady = false;
    Item.prototype.dron;

    item.Container_initialize=item.initialize;
    item.initialize=function()
    {
        this.Container_initialize();
        t= this;

        this.dron = new createjs.Bitmap(main.loadedData.getResult('dron'));
        this.addChild(this.dron);
        this.dron.regX = this.dron.image.width/2;
        this.dron.y = -101;


        var name = shuffle();


        this.blow = new createjs.Bitmap(main.loadedData.getResult('blow'));
        this.blow.regX  = this.blow.image.width/2;
        this.blow.regY  = this.blow.image.height;
        this.blow.x = -5;
        this.addChild(this.blow);

        this.img = new createjs.Bitmap(main.loadedData.getResult(name));
        this.img.regX =  this.img.image.width/2;
        this.img.x = -5;
        this.img.y = -10;

        this.name = name;
        this.nY = 5+Math.ceil(Math.random()*5);
        this.addChild(this.img);

        this.y = this.img.image.height+50+Math.random()*100;
        this.x = (Math.random()*(main.ow+400))-200;

        var random = Math.random()*1+1;

        TweenLite.from(this,random,{y:400,scaleX:0,scaleY:0,ease:Linear.easeNone,onComplete:this.Ready,onCompleteParams:[this]});
        var w = this.img.image.width;
        this.blow.scaleX = w/this.blow.image.width;
        this.blow.visible = false;

    };
    item.Ready = function(t){

        TweenLite.to(t.dron,.5,{y:-500,ease:Linear.easeNone,onComplete:resetDron,onCompleteParams:[t.dron]});
        t.beReady=true;
        t.blow.visible = true;

    };
    function resetDron(tt){

        tt.visible= false;
        tt.scaleX = tt.scaleY=1;
        tt.y = -101;
    }
    item.reset = function(){

        TweenMax.killTweensOf(this);
        TweenMax.killTweensOf(this.dron);
        this.beReady=false;
        this.removeChild(this.img);
        this.img = null;
        var name = shuffle();
        this.img = new createjs.Bitmap(main.loadedData.getResult(name));
        this.name = name;
        this.img.x = -5;
        this.img.y = -10;
        this.img.regX =  this.img.image.width/2;
        this.name = name;
        this.dron.visible = true;
        this.nY = 5+Math.ceil(Math.random()*5);
        this.addChildAt(this.img,2);
        this.blow.visible = false;
        var w = this.img.image.width;
        this.blow.scaleX = w/this.blow.image.width;

        this.y = this.img.image.height+50+Math.random()*100;
        this.x = (Math.random()*main.ow);


        var random = Math.random()*1+1;

        TweenLite.from(this,random,{y:400,scaleX:0,scaleY:0,ease:Linear.easeNone,onComplete:this.Ready,onCompleteParams:[this]});

    };
    function shuffle(){
        var przedrostek = 'l';

        if(Math.random()<0.5){
            przedrostek = 'b'
        }
        return przedrostek+Math.ceil(Math.random()*5);
    }
    item.update=function(){


    };

    item.gameOver=function(){


    };


    window.Item=Item;
}());
