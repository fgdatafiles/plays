
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

    function Slot0()
    {
        this.Container_constructor();
        t = this;
        this.initialize();

    };
    var p = c.extend(Slot0, c.Container);

    
    p._active = false;

    p.initialize=function() {
        console.log('Slot0 init')
        points = new c.Container();
        t.addChild(points)
        item = new c.Container();
        t.addChild(item);
        item.scaleX = item.scaleY = scale;
    };

    p.showGood = function(delay_scale){
        number= +Math.round(Math.random()*9);
        gfx = new c.Bitmap(main.loadedData.getResult('c'+number));
        gfx.name ='c';
        gfx.regX = gfx.image.width/2;
        gfx.regY = gfx.image.height;
        gfx.addEventListener('mousedown',p.onGetItem);
        item.addChild(gfx);
        gfx.alpha= 0;
        TweenLite.to(gfx,.3,{alpha:1});
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
        gfx.alpha= 0;
        TweenLite.to(gfx,.3,{alpha:1});
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
        }else{
            points_gfx=  new c.Bitmap(main.loadedData.getResult('plus'));
            val = 100;
        }

       hud.addPoints(val);
        points_gfx.regX = points_gfx.image.width/2;
        points_gfx.regY = points_gfx.image.height;
        points.addChild(points_gfx);
        points.y  = - gfx.image.height*item.scale;
        t.addChild(points);
        TweenLite.to(points_gfx,1,{y:-50,alpha:0,onComplete:removePointsGFX});
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
        gfx.removeEventListener('click',p.onGetItem);
        TweenLite.to(gfx,.3,{alpha:0,onComplete:removeSlotItem});

    };

    function removeSlotItem(){
        p._active = false;
        item.removeChild(gfx);
    }

    p.destroy = function(){
        console.log('destroy slot0');
        clearTimeout(p.timeout);
        t.removeAllChildren();
    }

    window.Slot0 = c.promote(Slot0, "Container");


}());
