
(function()
{
    'use strict';
    var t;
    var scale = 0.7;
    var item;
    var ACTIVE_DELAY_MAX = 1500;
    var ACTIVE_DELAY_MIN = 800;
    var _active_delay = ACTIVE_DELAY_MAX;
    var number;
    var gfx;
    var points;

    function Slot5()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = c.extend(Slot5, c.Container);
    p._active = false;
    p.initialize=function() {
        console.log('Slot5 init')
        points = new c.Container();
        t.addChild(points)
        item = new c.Container();
        item.scaleX = item.scaleY = 0.5;
        t.addChild(item);
        this.shape = new c.Shape();

        this.shape.graphics.f("rgba(255,0,0,0.996)").s().p("Aw7JFIAA32MAiHAAAIlCZIIoAAYIj6CHImEAgIkIAwInPAsg");
        this.shape.setTransform(108.6,94.7);


        this.shape.alpha =.6;
        item.mask = this.shape;
        this.shape.visible = false;
        t.addChild(this.shape);


    };

    p.showGood = function(delay_scale){
        number= +Math.round(Math.random()*7);
        gfx = new c.Bitmap(main.loadedData.getResult('c'+number));
        gfx.name ='c';
        gfx.regX = gfx.image.width/2;
        gfx.regY = gfx.image.height;
        gfx.addEventListener('click',p.onGetItem);
        item.addChild(gfx);
        //gfx.alpha= 0;
        gfx.x = 160;
        gfx.y = 500;

        TweenLite.to(gfx,.3,{alpha:1,y:364});
        p._active = true;
        p.timeout = setTimeout(p.hideItem,_active_delay);
    };

    p.showBad = function(delay_scale){
        number = +Math.round(Math.random()*9);
        gfx = new c.Bitmap(main.loadedData.getResult('m'+number));
        gfx.name ='m';
        gfx.regX = gfx.image.width/2;
        gfx.regY = gfx.image.height;
        gfx.addEventListener('mousedown',p.onGetItem);
        item.addChild(gfx);
        gfx.x = 160;
        gfx.y = 500;


        TweenLite.to(gfx,.3,{alpha:1,y:364});
        p._active = true;
        p.timeout = setTimeout(p.hideItem,_active_delay);


    };

    p.onGetItem = function(e){
        gfx.removeEventListener('mousedown',p.onGetItem);
        var points_gfx;
        var val;
        if(e.currentTarget.name.substr(0,1)=='c'){
            points_gfx =  new c.Bitmap(main.loadedData.getResult('minus'));
            val = -100;
            playSounds('fail'+Math.ceil(Math.random()*6));
        }else{
            playSounds('correct'+Math.ceil(Math.random()*6));
            points_gfx=  new c.Bitmap(main.loadedData.getResult('plus'));
            val = 100;
        }

        hud.addPoints(val);
        points_gfx.regX = points_gfx.image.width/2;
        points_gfx.regY = points_gfx.image.height;
        points_gfx.x = (gfx.x*item.scale);
        points_gfx.y = gfx.y-gfx.image.height;
        points.addChild(points_gfx);

        t.addChild(points);
        TweenLite.to(points_gfx,1,{y:points_gfx.y-50,alpha:0,onComplete:removePointsGFX});
        clearTimeout(p.timeout);
        p.hideItem();

    }
    function removePointsGFX(){
        points.removeChildAt(0);
    }
    p.scaleActiveDelay = function (scale) {

        _active_delay = ACTIVE_DELAY_MAX - ((ACTIVE_DELAY_MAX - ACTIVE_DELAY_MIN) * scale);
    };
    p.hideItem = function(){

        gfx.removeEventListener('mousedown',p.onGetItem);
        TweenLite.to(gfx,.3,{y:500,alpha:0,onComplete:removeSlotItem});

    };

    function removeSlotItem(){
        p._active = false;
        item.removeChild(gfx);
    }

    p.destroy = function(){
        console.log('destroy slot5');
        clearTimeout(p.timeout);
        t.removeAllChildren();
    }


    window.Slot5= c.promote(Slot5, "Container");


}());
