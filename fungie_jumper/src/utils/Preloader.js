
(function(){

    'use strict';
    var t;
    var maska;
    var bgd,bgd1,bgd2,bar,progress_bar,pre_container;
    var tt;
    var counter=1;
    var nX;
    var nY;

    function Preloader(_manifest){

        this.Container_constructor();
        this.manifest=_manifest;
        t=this;
        this.initialize();
    }
    var p = c.extend(Preloader, c.Container);

    p.initialize=function()
    {
        t=this;
        t.children=null;
        t.children=[];

        if (!c.Sound.initializeDefaultPlugins()) {return;}

        var bgd = new c.Bitmap('img/preloader_bgd.jpg');
        t.addChild(bgd);

     var    pre_bgd=new createjs.Bitmap('img/pre/pre_bgd.png');
        pre_bgd.x = (768/2)-255/2;
        pre_bgd.y = 1365/2 - 210/2;
        t.addChild(pre_bgd);

        maska=new createjs.Shape(new createjs.Graphics().beginFill('#e23d39').drawRect(0,0,218,13));
        maska.x = pre_bgd.x +16;
        maska.y =pre_bgd.y+ 194;
        maska.scaleX = 0;
        t.addChild(maska)



        startLoading()

    };

    function startLoading() {

        t.queue=new c.LoadQueue(false);
        t.queue.addEventListener('complete', onComplete);
        t.queue.addEventListener('progress', onProgress);
        t.queue.installPlugin(c.Sound);
        t.queue.loadManifest(t.manifest,true);

    }




    function onProgress(e)
    {
        maska.scaleX = e.loaded;
    }


    function onComplete(e)
    {

        setTimeout(disp,500);
    }
    function disp(){
       //
        clear();

    }

   
    function clear()
    {
        t.dispatchEvent('completed');
        clearInterval(tt);
        while(t.numChildren)
        {
            if(typeof t.getChildAt(0).removeAllChildren=== 'function')
            {
                t.getChildAt(0).removeAllChildren();
            }
            t.removeChildAt(0);
        }
        if(t.parent)
        {
        t.parent.removeChild(t);
        }
    }
    window.Preloader = c.promote(Preloader, "Container");

}());