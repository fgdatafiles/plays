
(function()
{
    'use strict';
    var t;
    var dron;
    var Item2=function()
    {
        this.initialize();
    };
    var item2=Item2.prototype=new createjs.Container();
    Item2.prototype.img;
    Item2.prototype.hz;
    Item2.prototype.nY;
    Item2.prototype.beReady = false;
    Item2.prototype.dron;
    Item2.prototype.dron_container;
    Item2.prototype.img_container;

    item2.Container_initialize=item2.initialize;
    item2.initialize=function()
    {
        this.Container_initialize();
        t= this;

        this.dron = new createjs.Bitmap(main.loadedData.getResult('dron2'));

        this.dron.regX = this.dron.image.width/2;
        this.dron.y = -96;


        var name = shuffle();


        this.dron_container = new createjs.Container();
        this.addChild(this.dron_container);

        this.img_container = new createjs.Container();
        this.addChild(this.img_container);

        this.createImage(name);
        /// BLOW
        this.blow = new createjs.Bitmap(main.loadedData.getResult('blow'));
        this.blow.regX  = this.blow.image.width/2;
        this.blow.regY  = this.blow.image.height;
        this.blow.x = -5;
        this.img_container.addChild(this.blow);
        this.blow.visible = false;


        // IMAGE



        this.dron_container.addChild(this.dron);
        var w = this.img.image.width;
        this.blow.scaleX = w/this.blow.image.width;



       this.dron_container.y = this.img_container.y =  100+Math.random()*150;
        this.dron_container.x =this.img_container.x = 944+80+(Math.random()*100);

        //var random = Math.random()*1+1;
        var posX =(Math.random()*844)+100;


        TweenLite.to( this.dron_container,1,{x:posX, ease:Linear.easeNone,onComplete:this.Ready,onCompleteParams:[this]});
        TweenLite.to( this.img_container,1,{x:posX, ease:Linear.easeNone});

    };

    item2.createImage = function(name){
        this.img = new createjs.Bitmap(main.loadedData.getResult(name));
        this.img.regX =  this.img.image.width/2;
        this.img.x = -5;
        this.img.y = -10;
        this.img_container.addChild(this.img);
        this.img_container.name = name;
        this.nY = 5+Math.ceil(Math.random()*5);

    }
    item2.Ready = function(t){

        TweenLite.to(t.dron_container,.5,{x:-100,ease:Linear.easeNone});
        t.beReady=true;
        t.blow.visible = true;

    };

    item2.reset = function(){

        TweenMax.killTweensOf(this.img_container);
        TweenMax.killTweensOf(this.dron_container);
        this.beReady=false;
        this.img_container.removeChild(this.img);
        this.img = null;
        var name = shuffle();
        this.createImage(name);

        this.blow.visible = false;
        var w = this.img.image.width;
        this.blow.scaleX = w/this.blow.image.width;


        this.dron_container.y = this.img_container.y =  100+Math.random()*150;
        this.dron_container.x =this.img_container.x = 944+80+(Math.random()*100);

        var random = Math.random()*1+1;
        var posX =100+(Math.random()*744)+100;
        TweenLite.to( this.dron_container,1,{x:posX, ease:Linear.easeNone,onComplete:this.Ready,onCompleteParams:[this]});
        TweenLite.to( this.img_container,1,{x:posX, ease:Linear.easeNone});

    };
    function shuffle(){
        var przedrostek = 'l';

        if(Math.random()<0.5){
            przedrostek = 'b'
        }
        return przedrostek+Math.ceil(Math.random()*5);
    }
    item2.update=function(){


    };

    item2.gameOver=function(){


    };


    window.Item2=Item2;
}());
