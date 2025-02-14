
(function()
{
    'use strict';
    var t;

    var item;
    var ACTIVE_DELAY_MAX = 1500;
    var ACTIVE_DELAY_MIN = 800;
    var _active_delay = ACTIVE_DELAY_MAX;
    var number;
    var gfx;
    var points;
    let data;
    function Slot12(_data)
    {

        this.Container_constructor();
        t = this;
        this.initialize(_data);
    }
    var p = c.extend(Slot12, c.Container);
    p._active = false;
    p.initialize=function(_data) {

        data = _data;
        console.log('init0')
        points = new c.Container();
        t.addChild(points)
        item = new c.Container();
        item.scaleX = item.scaleY = data.scale;
        t.addChild(item);



    };

    p.showGood = function(){
        number= Math.floor(Math.random()*8);
        gfx = new c.Bitmap(main.loadedData.getResult('c'+number));
        gfx.name ='c';
        showRest(gfx)

    };

    p.showBad = function(){
        number = Math.floor(Math.random()*9);
        gfx = new c.Bitmap(main.loadedData.getResult('m'+number));
        gfx.name ='m';
        showRest(gfx)

    };
    const showRest =(gfx)=>{
        gfx.regX = gfx.image.width/2;
        gfx.regY = gfx.image.height;
        gfx.addEventListener('mousedown',onGetItem);
        item.addChild(gfx);
        gfx.alpha= 0;
        gfx.y = data.height+gfx.regY;


        gsap.to(gfx,.3,{alpha:1,y:data.height});
        p._active = true;
        p.timeout = setTimeout(p.hideItem,_active_delay);
    }
    const onGetItem =(e)=>{
        gfx.mouseEnabled=false;
        gfx.removeEventListener('mousedown',onGetItem);
        var points_gfx;
        var val;
        if(e.currentTarget.name.substr(0,1)=='c'){
            points_gfx =  new c.Bitmap(main.loadedData.getResult('minus'));

            t.parent.parent.removeLive();
            playSounds('fail'+Math.ceil(Math.random()*4));
        }else{
            playSounds('success'+Math.ceil(Math.random()*4));
            points_gfx=  new c.Bitmap(main.loadedData.getResult('plus'));
            val = 100;
            t.parent.parent.addPoints(val);
        }
        points_gfx.regX = points_gfx.image.width/2;
        points_gfx.regY = points_gfx.image.height;
        points.addChild(points_gfx);
        points.y  = (-gfx.image.height*item.scale)+50;

        t.addChild(points);
        gsap.to(points_gfx,1,{y:-50,alpha:0,onComplete:removePointsGFX});
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

        gfx.removeEventListener('mousedown',onGetItem);
        gsap.to(gfx,.3,{alpha:0,onComplete:removeSlotItem});

    };

    function removeSlotItem(){
        p._active = false;
        item.removeChild(gfx);
        gfx = null;
    }

    p.destroy = function(){

        clearTimeout(p.timeout);
        t.removeAllChildren();
    }


    window.Slot12 = c.promote(Slot12, "Container");
    

}());
